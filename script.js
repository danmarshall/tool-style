// WebGL header background
const canvas = document.getElementById('headerCanvas');
const gl = canvas.getContext('webgl');

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`);
gl.compileShader(vertexShader);
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error('Vertex shader error:', gl.getShaderInfoLog(vertexShader));
}

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
    #ifdef GL_OES_standard_derivatives
    #extension GL_OES_standard_derivatives : enable
    #endif
    precision mediump float;
    uniform float time;
    uniform vec2 resolution;
    
    #define h21(p) fract(sin(dot(p,vec2(23.43,84.21)))*4832.32)
    
    vec3 hs(float h, float s, float T) {
        return 1.0-s+s*clamp(abs(mod(h+h+T*0.2+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0);
    }
    
    vec4 hex(vec2 U) {
        vec2 T = vec2(1.732,1.0),
             p1 = floor(U/T) + 0.5,
             p2 = ceil((U-vec2(1.0,0.5)) / T),
             h1 = U - p1*T,
             h2 = U - p2*T;
        return dot(h1,h1) < dot(h2,h2) ? vec4(h1,p1) : vec4(h2,p2);
    }
    
    void main() {
        vec2 F = gl_FragCoord.xy;
        float T = (time + 150.0) * 0.1;
        vec2 R = resolution.xy,
             U = (F+F - R) / max(R.x,R.y) + T*vec2(0.005,0.01);
        vec4 H = hex(U.yx*6.0);
        vec2 p = H.xy, id = H.zw;
        float px = 0.01,
              h = h21(id),
              c = id.x*0.15 + h*0.45,
              w0 = p.x,
              w1 = dot(p,vec2(-0.5,0.866)),
              w2 = dot(p,vec2(-0.5,-0.866)),
              m = max(max(w0,w1),w2);
        vec3 C = m==w1 ? 0.45*hs(c+0.4,1.0,T) 
               : m==w2 ? 0.15*hs(c+0.6,1.0,T)
               :         0.45*hs(c+0.2,0.75,T);
        h = max(abs(p.x)*0.866 + abs(p.y)/2.0, abs(p.y))
            - 0.3 - 0.2*cos(T*h);
        float edgeSmooth = smoothstep(px,-px,h);
        vec3 color = sqrt(edgeSmooth * mix(C, vec3(0.9), smoothstep(px,-px,abs(h)-0.01)));
        color = mix(vec3(0.5), color, 0.6);
        gl_FragColor.rgb = color;
        gl_FragColor.a = 1.0;
    }
`);
gl.compileShader(fragmentShader);

// Check for errors
if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
    console.error('Vertex shader error:', gl.getShaderInfoLog(vertexShader));
}
if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
    console.error('Fragment shader error:', gl.getShaderInfoLog(fragmentShader));
}

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program link error:', gl.getProgramInfoLog(program));
}

gl.useProgram(program);

const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

const position = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(position);
gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

const timeUniform = gl.getUniformLocation(program, 'time');
const resolutionUniform = gl.getUniformLocation(program, 'resolution');

function render() {
    gl.uniform1f(timeUniform, performance.now() / 1000);
    gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
}
render();

// Navigation toggle
const toggle = document.getElementById('toolsToggle');
const list = document.getElementById('toolsList');

toggle.addEventListener('click', () => {
    list.classList.toggle('open');
});

document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !list.contains(e.target)) {
        list.classList.remove('open');
    }
});

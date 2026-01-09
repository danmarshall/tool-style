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
    precision mediump float;
    uniform float time;
    uniform vec2 resolution;
    
    float scale = 6.0;
    float sqrt3d3 = 0.57735026918962576450914878050196;
    float twoSqrt3d3 = 1.1547005383792515290182975610039;
    
    vec4 hexagon(vec2 p) 
    {
        vec2 q = vec2(p.x*2.0*sqrt3d3, p.y + p.x*sqrt3d3);
        
        vec2 pi = floor(q);
        vec2 pf = fract(q);

        float v = mod(pi.x + pi.y, 3.0);

        float ca = step(1.0,v);
        float cb = step(2.0,v);
        vec2 ma = step(pf.xy,pf.yx);
        
        float e = dot(ma, 1.0-pf.yx + ca*(pf.x+pf.y-1.0) + cb*(pf.yx-2.0*pf.xy));
        
        p = vec2(q.x + floor(0.5+p.y/1.5), 4.0*p.y/3.0)*0.5 + 0.5;
        float f = length((fract(p) - 0.5)*vec2(1.0,0.85));		
        
        return vec4(pi + ca - cb*ma, e, f);
    }

    float hash1(vec2 p) { 
        float n = dot(p,vec2(127.1,311.7)); 
        return fract(sin(n)*43758.5453); 
    }

    void main() 
    {
        vec2 uv = gl_FragCoord.xy/resolution.xy;
        vec2 pos = gl_FragCoord.xy / resolution.y;
        float ratio = resolution.x / resolution.y;
        
        vec4 h = hexagon(scale * pos);
        float t = time * 0.05;
        float hash = hash1(h.xy);
        float hxToWidth = scale * ratio * twoSqrt3d3;
        float front = -h.x + (fract(t) * 1.4 - 0.2 + hash * 0.15) * hxToWidth;
        float hx = h.x / hxToWidth + front;
        
        vec3 cola = vec3(0.35, 0.35, 0.35);
        vec3 colb = vec3(0.5, 0.5, 0.5);
        vec3 bg = vec3(0.7, 0.7, 0.7);
        float cycle = fract(t * 0.5);
        float flip = step(0.5, cycle);
        float progress = fract(cycle * 2.0);
        float adjustedFront = -h.x + (progress * 1.4 - 0.2 + hash * 0.15) * hxToWidth;
        float adjustedHx = h.x / hxToWidth + adjustedFront;
        float growth = smoothstep(0.75, 1.0, adjustedHx * (h.z + 0.025));
        vec3 colorA = mix(cola, colb, flip);
        vec3 colorB = mix(colb, cola, flip);
        vec3 col = mix(bg, mix(colorA, colorB, growth), smoothstep(0.05, 0.1, h.z));
        
        gl_FragColor = vec4(col, 1.0);
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

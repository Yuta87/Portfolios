precision mediump float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D tex;

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  float dist = distance(uv, vec2(0.5));
  
  // 波紋
  float ripple = sin(30.0 * dist - time * 5.0) * 0.02;

  // 拡大
  uv = 0.5 + (uv - 0.5) * (1.0 + ripple);

  vec4 color = texture2D(tex, uv);
  gl_FragColor = color;
}

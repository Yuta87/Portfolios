uniform float u_time;
varying vec2 vUv;

// 青海波パターン
float seigaiha(vec2 uv, float scale) {
    uv *= scale;
    float y = uv.y + 0.25 * sin(uv.x * 3.1415 + u_time * 0.2);
    float wave = abs(sin(y * 3.1415));
    float pattern = smoothstep(0.45, 0.5, wave);
    return pattern;
}

void main() {
    // グローバルなグラデーション（青→緑→白）
    vec3 grad = mix(vec3(0.1,0.4,0.8), vec3(0.2,0.8,0.5), vUv.y);
    grad = mix(grad, vec3(1.0), pow(vUv.y, 4.0));

    // 青海波パターン
    float pattern = seigaiha(vUv, 8.0);

    // パターンを色に乗算
    vec3 color = grad * pattern + grad * 0.2;

    gl_FragColor = vec4(color, 0.85);
}
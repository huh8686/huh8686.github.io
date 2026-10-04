# huh8686.github.io

3D vision 논문 노트. 읽으면서 이해한 것과 아직 빈 곳을 같은 형식으로 남깁니다.

## 네 축

- **Correspondence and pose** — 매칭, 카메라 pose, 6D object pose
- **Reconstruction** — SfM, MVS, surface
- **Neural rendering** — NeRF 가계, 3DGS 가계
- **3D understanding** — detection, segmentation

표현(점군, 메쉬, NeRF, 3DGS)은 큰 축이 아니라 태그입니다.

## 노트 추가

1. `src/content/papers/starter.md`를 `src/content/papers/짧은-슬러그.md`로 복사합니다.
2. frontmatter를 채우고 `draft: false`로 바꿉니다.
3. 본문은 문제 / 방법 / 이미 알던 것 / 아직 빈 질문 / 이어지는 논문 순입니다.

```sh
npm install
npm run dev
```

배포는 `main` 푸시 후 GitHub Actions가 Pages로 올립니다. 저장소 Settings → Pages → Source를 **GitHub Actions**로 두면 됩니다.

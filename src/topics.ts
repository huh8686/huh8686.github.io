export const topicIds = [
  'correspondence-and-pose',
  'reconstruction',
  'neural-rendering',
  'understanding',
] as const;

export type TopicId = (typeof topicIds)[number];

export type Topic = {
  id: TopicId;
  title: string;
  kicker: string;
  blurb: string;
  includes: string[];
};

export const topics: Topic[] = [
  {
    id: 'correspondence-and-pose',
    title: 'Correspondence and pose',
    kicker: 'matching → pose',
    blurb:
      '매칭이 먼저이고, pose는 그 결과입니다. SuperPoint·SuperGlue·LoFTR 같은 대응점, 카메라 6DoF, 로컬라이제이션, 물체 6D pose가 여기입니다.',
    includes: [
      'SuperPoint, SuperGlue, LoFTR, DISK',
      '카메라 pose / visual localization',
      '물체 6D pose',
    ],
  },
  {
    id: 'reconstruction',
    title: 'Reconstruction',
    kicker: 'geometry',
    blurb:
      '기하를 만드는 축입니다. SfM, MVS·depth, 메쉬·TSDF·NeuS처럼 장면을 복원하는 논문이 여기입니다.',
    includes: ['SfM / COLMAP / BA', 'MVS, depth', 'Surface, TSDF, SDF'],
  },
  {
    id: 'neural-rendering',
    title: 'Neural rendering',
    kicker: 'NeRF · 3DGS',
    blurb:
      'NeRF 가계와 3DGS 가계. 새 시점 합성이 본업이고, 기하는 부산물인 경우가 많습니다. 둘은 같은 축의 한 줄기다.',
    includes: ['NeRF family', '3D Gaussian Splatting', 'light field / hybrid'],
  },
  {
    id: 'understanding',
    title: '3D understanding',
    kicker: 'det · seg',
    blurb:
      'Detection과 segmentation은 형제입니다. 박스가 detection, 점·복셀·가우시안 단위 라벨이 segmentation입니다.',
    includes: ['3D object detection', 'semantic / instance segmentation', 'tracking'],
  },
];

export function getTopic(id: TopicId): Topic {
  const topic = topics.find((item) => item.id === id);
  if (!topic) {
    throw new Error(`Unknown topic: ${id}`);
  }
  return topic;
}

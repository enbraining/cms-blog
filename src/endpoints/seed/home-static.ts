import type { Page } from '@/payload-types'

// Used for pre-seeded content so that the homepage is not empty
// @ts-expect-error
export const homeStatic: Page = {
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'lowImpact',
    richText: {
      root: {
        type: 'root',
        children: [
            {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "아키텍쳐와 함께 하는 개발자 김동학입니다. 많은 패러다임과 서비스들을 접하면서 역량을 키우고 있습니다.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": "ltr",
                "textStyle": "",
                "textFormat": 0
              },
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "처음으로 프로그래밍을 배우기 시작하면서 스프링으로 입문하여 필요에 따라 QueryDSL, Spring Batch 등의 기술을 추가적으로 익혔으며, 그 후 타입스크립트 공부를 시작, 토이 프로젝트에서 Nest.js + Next.js 풀스택 개발을 하였습니다.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": "ltr",
                "textStyle": "",
                "textFormat": 0
              },
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "광주소프트웨어마이스터고등학교에서 동아리 맛소금의 부장으로 참여하여, 후배들과의 커뮤니케이션을 위해서 노력하고, 문서화를 통해 진행중인 프로젝트를 쉽게 인수인계할 수 있도록 하였습니다. 또한 Link 행사에 참여해서 다른 마이스터고 동아리와의 커뮤니케이션을 진행했습니다.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": "ltr",
                "textStyle": "",
                "textFormat": 0
              },
              {
                "type": "paragraph",
                "format": "",
                "indent": 0,
                "version": 1,
                "children": [
                  {
                    "mode": "normal",
                    "text": "소프트웨어마이스터고 4개교 연합 해커톤에 참가해서 포토이즘을 주제로, ChatGPT를 이용한 오디오 분석과 같은 기능들을 개발해서 인기상을 수상하였습니다.",
                    "type": "text",
                    "style": "",
                    "detail": 0,
                    "format": 0,
                    "version": 1
                  }
                ],
                "direction": "ltr",
                "textStyle": "",
                "textFormat": 0
              }
            ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    },
  },
  meta: {
    description: 'An open-source website built with Payload and Next.js.',
    title: 'Enbraining Blog',
  },
  title: 'Home',
}

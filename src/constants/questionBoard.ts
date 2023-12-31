export const questionTypes = [
  { id: 1, type: '전체' },
  { id: 2, type: '무인주문기' },
  { id: 3, type: '스마트 가전제품 사용' },
  { id: 4, type: '상품구매' },
  { id: 5, type: '이동수단' },
  { id: 6, type: '서비스이용 예약' },
  { id: 7, type: '기타' },
]

export const questionPoints = [
  { id: 1, type: '조금', point: 100 },
  { id: 2, type: '기본', point: 300 },
  { id: 3, type: '많이', point: 500 },
]

export const questionAccessList = [
  { id: 1, access: 'public', option: '공개' },
  { id: 2, access: 'partner', option: '파트너 공개' },
  { id: 3, access: 'private', option: '비공개' },
]

export const questionList = [
  {
    id: 1,
    point: 100,
    type: '이동수단',
    date: '23.04.28',
    title: 'KTX 시간 바꾸고 싶어요 1',
    photo: 'detail_ktx_img',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 1,
    views: 1,
    isAdopted: false,
  },
  {
    id: 2,
    point: 100,
    type: '이동수단',
    date: '23.04.01',
    title: 'KTX 시간 바꾸고 싶어요 2',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 0,
    views: 1,
    isAdopted: true,
  },
  {
    id: 3,
    point: 300,
    type: '이동수단',
    date: '23.01.28',
    title: 'KTX 시간 바꾸고 싶어요 3',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 6,
    views: 26,
    isAdopted: true,
  },
  {
    id: 4,
    point: 100,
    type: '이동수단',
    date: '23.04.28',
    title: 'KTX 시간 바꾸고 싶어요 4',
    photo: 'detail_ktx_img',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 1,
    views: 1,
    isAdopted: false,
  },
  {
    id: 5,
    point: 100,
    type: '이동수단',
    date: '23.04.01',
    title: 'KTX 시간 바꾸고 싶어요 5',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 0,
    views: 1,
    isAdopted: true,
  },
  {
    id: 6,
    point: 300,
    type: '이동수단',
    date: '23.01.28',
    title: 'KTX 시간 바꾸고 싶어요 6',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 6,
    views: 26,
    isAdopted: true,
  },
  {
    id: 7,
    point: 100,
    type: '이동수단',
    date: '23.04.28',
    title: 'KTX 시간 바꾸고 싶어요 7',
    photo: 'detail_ktx_img',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 1,
    views: 1,
    isAdopted: false,
  },
  {
    id: 8,
    point: 100,
    type: '이동수단',
    date: '23.04.01',
    title: 'KTX 시간 바꾸고 싶어요 8',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 0,
    views: 1,
    isAdopted: true,
  },
  {
    id: 9,
    point: 300,
    type: '이동수단',
    date: '23.01.28',
    title: 'KTX 시간 바꾸고 싶어요 9',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 6,
    views: 26,
    isAdopted: true,
  },
  {
    id: 10,
    point: 100,
    type: '이동수단',
    date: '23.04.28',
    title: 'KTX 시간 바꾸고 싶어요 10',
    photo: 'detail_ktx_img',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 1,
    views: 1,
    isAdopted: false,
  },
  {
    id: 11,
    point: 100,
    type: '이동수단',
    date: '23.04.01',
    title: 'KTX 시간 바꾸고 싶어요 11',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 0,
    views: 1,
    isAdopted: true,
  },
  {
    id: 12,
    point: 300,
    type: '이동수단',
    date: '23.01.28',
    title: 'KTX 시간 바꾸고 싶어요 12',
    photo: '',
    content:
      'KTX 타고 가려고 하는데 시간을 잘못 예약했어요.. 시간이 얼마 안남았는데 바꾸고 싶어요 가능할까요? 오프라인으로 얘기할 수 있는 곳이 문을 닫아서 온라인으로 직접 해야할 것 같은데 어떻게 해야할지 모르겠네요.. 기차표 취소하고 하려면 바로 자리 매진날 것 같아서 겁나서 시도를 못하겠어요ㅠㅠ 제발 도움 좀 주세요',
    answers: 6,
    views: 26,
    isAdopted: true,
  },
]

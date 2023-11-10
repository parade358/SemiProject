
//데이터페이지

//질문 페이지에 나올 q(질문) 과 a(답변)
// q2, q3, q4의 답변은 DB에 전달해야 한다 -> 취향 및 선호에 영향

// 선택에 따른 값이 db에 저장될 때 번호와 문자열 매칭(db는 번호만 존재)
// taste 1 => 1.액티비티 / 2.식도락 / 3.힐링 / 4.쇼핑 
// taste 2 => 1.유적지 / 2.관광지 / 3.체험 / 4.반려동물 
// taste 3 => 1.사진명소 / 2.자연속산책 / 3.시끌벅적 / 4.카페와맛집 

/* 
											
0	종로 경복궁				커플/가족/친구			식도락/힐링				유적지/체험				사진 명소/카페와 맛집
1	여의도 한강공원			혼자/커플/가족/친구		액티비티/식도락/쇼핑		관광지/체험/반려동물		시끌시끌/카페맛집
2	잠실 롯데월드 롯데타워		커플/가족/친구			액티비티/쇼핑			관광지/체험				시끌시끌 
3	월드컵공원				가족/친구				힐링					반려동물				사진명소/자연 속 산책
4	어린이 대공원			커플/가족				액티비티/힐링			체험					사진명소/시끌시끌한 곳
5	망원 홍대 연희동			커플/친구				식도락/힐링				관광지				시끌시끌/카페와 맛집
6	성수					혼자/커플/친구			쇼핑					체험					사진명소/시끌시끌/카페와 맛집
7	서울숲				커플/가족/친구			힐링					관광지/체험				자연 속 산책
8	서울식물원				혼자/커플/가족			힐링/식도락				체험/반려동물			자연 속 산책
9	을지로				혼자/커플/친구			식도락				유적지/관광지			사진 명소/시끌시끌/카페와 맛집


*/


//


const qnaList = [
  {
    q: '1. 누구와의 여행을 계획하고 계신가요?',
    a: [
      { answer: '혼자여행', type: ['1','6','8','9'] },
      { answer: '연인이랑', type: ['0','1','2','4','6','7','8','9'] },
      { answer: '가족여행', type: ['0','1','2','3','4','7', '8'] },
      { answer: '친구들과', type: ['0','1','2','3','5','6','7','9'] },
    ]
  },
  {
    q: '2. 여행의 목적이 어떻게 되나요?',
    a: [
      { answer: '액티비티', type: ['2','2','4'] },
      { answer: '식도락', type: ['0', '1', '5', '8','9'] },
      { answer: '힐링', type: ['0', '3', '4', '5', '7','8'] },
      { answer: '쇼핑', type: ['1', '2', '6'] },
    ]
  },
  {
    q: '3. 어떤 것에 흥미가 있으세요?',
    a: [
      { answer: '유적지', type: ['0','9'] },
      { answer: '관광지', type: ['1', '2', '5', '7', '9'] },
      { answer: '체험', type: ['0', '1', '2', '4', '6','7','8'] },
      { answer: '반려동물', type: ['1', '3', '8'] },
    ]
  },
    {
    q: '4. 선호하는 것은 무엇인가요?',
    a: [
      { answer: '사진 명소', type: ['0', '3','4','6','9'] },
      { answer: '자연 속 산책', type: ['3', '7', '8'] },
      { answer: '시끌벅적', type: ['1', '2', '5', '6', '9'] },
      { answer: '카페와 맛집', type: ['0','1', '5','6','9'] },
    ]
  }
]


/* 2, 3, 4번 답변 = type 값을 컨트롤러로 전달하기  */
/*
const buttons = document.querySelectorAll('.answerList');

buttons.forEach((button, index) => {
  button.addEventListener('click', function() {
    const buttonIndex = index;
    console.log('Clicked Button Index:', buttonIndex);
    
	// JSON 형태로 변환
	var jsonData = JSON.stringify({
	  selectedTypes1: selectedAnswer1,
	  selectedTypes2: selectedAnswer2,
	  selectedTypes3: selectedAnswer3  
	});

  
  });
});




// fetch를 사용하여 서버로 데이터 전송
fetch('reco.sl', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: jsonData
})
.then(response => response.json())
.then(data => {
  // 서버에서 받은 응답 처리
  console.log(data);
})
.catch(error => {
  console.error('Error:', error);
});
*/


const buttons = document.querySelectorAll('.answerList');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const boxIndex = this.getAttribute('data-box');
    const buttonIndex = this.getAttribute('data-index');
    console.log('Box Index:', boxIndex);
    console.log('Button Index:', buttonIndex);
    
    
    // 서버로 전송할 데이터 객체 생성
    const data = {
      boxIndex: boxIndex,
      buttonIndex: buttonIndex
    };

    // 서버로 데이터를 전송하는 POST 요청 보내기
    fetch('/reco.sl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      // 서버에서 받은 응답 처리
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

});



//결과페이지에 보여질 텍스트
const infoList = [
  {
    name: '종로 그리고 경복궁',
    desc: '경복궁은 언제나 아름답지만 야간개장을 놓치는 건 너무 아쉬운 일이랍니다. <br>아름다운 고궁의 모습과 종로 시장의 맛있는 음식은 어떠세요?'  },
  {
    name: '여의도 한강공원',
    desc: '더현대 서울과 IFC몰 등 쟁쟁한 쇼핑몰, 근처의 한강공원은 아주 좋은 경로입니다. <br> 쇼핑몰을 둘러보고 한강공원에서의 휴식은 어떠세요?'  },
  {
    name: '잠실 롯데월드와 롯데타워',
    desc: '롯데월드는 서울 내에서 가장 큰 놀이공원이죠! <br> 또한 바로 옆의 롯데타워는 영화관, 음식점, 쇼핑몰이 있어 둘러보기 편리하답니다.'  },
  {
    name: '월드컵공원',
    desc: '월드컵공원은 넓고 쾌적하여 산책하기에 아주 좋답니다. <br> 하늘공원의 경치를 보면서 마음을 정화해보세요.'  },
  {
    name: '어린이 대공원',
    desc: '작은 동물원과 아이들이 놀기 좋은 놀이공원, 산책하기 적당한 길, <br>봄에는 만개하는 벚꽃이 아름다운 어린이 대공원은 어떠세요? '  },
  {
    name: '홍대, 망원, 연희동',
    desc: '여러 취향을 저격하는 시끌벅적한 홍대 거리, 조금만 벗어나면 평화로운 망원동의 맛집, <br> 예쁜 카페가 기다리는 연희동을 추천드려요!'  },
  {
    name: '성수',
    desc: '서울에서 팝업이 가장 많이 열리는 성수는 <br> 다양한 패션 브랜드와 전시를 체험할 수 있어요!'  },
  {
    name: '서울숲',
    desc: '높은 건물에 둘러싸인 아름다운 숲과 공원, 그리고 서울에서 사슴을 볼 수 있는 장소!<br> 누구와 함께 가도 좋은 서울숲입니다.'  },
  {
    name: '서울식물원',
    desc: '분수대가 솟아오르는 야외 공원과 다양한 식물을 보유한 실내 식물원을 구경해보세요!<br>고요하고 깨끗한 자연 속에서의 산책을 추천드립니다.'  },
  {
    name: '을지로',
    desc: '감성있는 노포는 맛과 멋을 갖고 있습니다. 그 덕분인지 카메라를 들고 다니는 사람을 꼭 볼 수 있답니다. <br> 다양한 시간이 공존하는 을지로를 추천 드립니다.'  },

]

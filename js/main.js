// main.js
window.addEventListener(`load`, () => {
  function addOn(el){
    el.classList.add('on')
  }
  
  function removeOn(el){
    el.classList.remove('on')
  }
  
  function toggleOn(el){
    el.classList.toggle('on')
  }
  
  /* 모바일 topmenu 및 gnb */
  const mob_topMenu_dd = document.querySelectorAll('.mob_topMenu dd a')
  const mob_topMenu_ul = document.querySelector('.mob_topMenu dd>ul')
  
  const mob_gnb_li = document.querySelectorAll('.mob_gnb>ul>li')
  const mob_gnb_li_ul = document.querySelectorAll('.mob_gnb>ul>li>ul')
  
    /* topmenu */
  mob_topMenu_dd[4].addEventListener('click', e=>{
    e.preventDefault();
    console.log(mob_topMenu_dd[4])
    toggleOn(mob_topMenu_ul)
    toggleOn(mob_topMenu_dd[4])
  })
  
    /* gnb */
    
  mob_gnb_li.forEach((el,index) => {
    el.addEventListener('click', e =>{
      e.preventDefault();
      toggleOn(el)
      toggleOn(mob_gnb_li_ul[index-1])
    })
  });
  
  
  
  /* 고객센터 버튼 */
  const topMenuDD = document.querySelectorAll('dl.topMenu>dd');
  topMenuDD[4].addEventListener('click', e =>{
    topMenuDD[4].classList.toggle('on');
  
    if(e.currentTarget.classList.contains('on')){
      e.currentTarget.children[0].setAttribute('title', '고객센터 닫기')
  
    }else {
      e.currentTarget.children[0].setAttribute('title', '고객센터 열기')
  
    }
  })
  
  const header_wrap = document.querySelector('.header_wrap')
  const gnb_lis = document.querySelectorAll('.gnb>ul>li')
  const gnb_ul = document.querySelectorAll('.gnb>ul>li>ul')
  
  for(let i=0; i<gnb_lis.length; i++){
    gnb_lis[i].addEventListener('mouseover', ()=>{
  
      //고객센터에 on 붙어 있으면 고객센터의 on 지움
      if(topMenuDD[4].classList.contains('on')){
        removeOn(topMenuDD[4])
      
      }
      //검색박스에 on 붙어 있으면 검색박스의 on 지움
      if(form_srch.classList.contains('on')){
        removeOn(btn_srch)
        removeOn(form_srch)
      }
  
      header_wrap.classList.add('on')
      for(let i=0; i<gnb_ul.length; i++){
        addOn(gnb_ul[i])
      }
    })
  
    gnb_lis[i].addEventListener('mouseout', ()=>{
      removeOn(header_wrap)
      for(let i=0; i<gnb_ul.length; i++){
        removeOn(gnb_ul[i])
      }
    })
    gnb_lis[i].children[0].addEventListener('focus', ()=>{
      addOn(header_wrap)
      for(let i=0; i<gnb_ul.length; i++){
        addOn(gnb_ul[i])
      }
    })
  
    gnb_lis[i].children[0].addEventListener('blur', ()=>{
      removeOn(header_wrap)
      for(let i=0; i<gnb_ul.length; i++){
        removeOn(gnb_ul[i])
      }
    })
  }
  
  
  /* 검색 열기 닫기 */
  const btn_srch = document.querySelector('span.srch_open')
  const form_srch = document.querySelector('form.srch')
  
  btn_srch.addEventListener('click', e =>{
    e.preventDefault();
    btn_srch.classList.toggle('on');
    form_srch.classList.toggle('on');
  
    if(e.currentTarget.classList.contains('on')){
      e.currentTarget.children[0].setAttribute('title', '검색입력서식 닫기')
  
    }else {
      e.currentTarget.children[0].setAttribute('title', '검색입력서식 열기')
  
    }
  })
  
  
  /* 로그인 이미지 */
  //a.appear 안에 img 000 00.png ~ 000 56.png
  //a.loop 안에 img 000 00 ~ 000 81.png
  
  const appear = document.querySelector('.appear')
  const loop = document.querySelector('.loop')
  
  let imgs_appear = '';
  let imgs_loop ='';
  
  for(let i=0;i<57;i++){
    if(i<10) i='0' + i
    imgs_appear += `<img src='images/appear/appear_000${i}.png' alt=${i}' />`
  }
  
  for(let i=0;i<82;i++){
    if(i<10) i='0' + i
    imgs_loop += `<img src='images/loop/loop_000${i}.png' alt='${i}' />`
  }
  
  appear.innerHTML = imgs_appear;
  loop.innerHTML = imgs_loop;
  
  
  
  /* 로그인 버튼 애니메이션 */
  
  const appearImgs = document.querySelectorAll('.appear>img')
  const loopImgs = document.querySelectorAll('.loop>img')
  const delay = 0.05
  
  for(let i=0; i < appearImgs.length; i++){
     appearImgs[i].style.animation = `ani 2.85s linear ${delay * i}s 1`
  }
  
  for(let j=0; j < loopImgs.length; j++){
    loopImgs[j].style.animation = `ani 5.0s linear ${3.0 + (delay * j)}s infinite`;
    
  }
  
  /* content1 - 퀵메뉴 이미지 애니메이션 */
  
  const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');
  
  for(let j=0; j<quickSpan.length; j++){
    let images ='';
    for(let i=0; i<20; i++){
      if(i<10) i='0'+i
      images += `<img src = "images/quick0${j+1}/quick0${j+1}_000${i}.png" alt='${i}'/>`;
    }
    quickSpan[j].innerHTML = images
  }
  // li에 마우스 올렸을 때 이미지 애니메이션 적용
  //마우스 뗏을 때 이미지 애니메이션 삭제
  
  const content1Li = document.querySelectorAll('.content1 ul li');
  
  for(let i=0; i<content1Li.length; i++){
    content1Li[i].addEventListener('mouseover', e =>{
        for(let k=0; k<20; k++){
          let imgLi = e.currentTarget.children[0].children[0].children;
          imgLi[k].style.animation = `ani 0.5s linear ${delay * k}s 0.1`
        }
    })
  }
  
  for(let i=0; i<content1Li.length; i++){
    content1Li[i].addEventListener('mouseout', e =>{
        for(let k=0; k<20; k++){
          let imgLi = e.currentTarget.children[0].children[0].children;
          imgLi[k].style.animation = `none`
        }
    })
  }
  
  
  
  //배너
  const btnNext = document.querySelector('a.next')
  const btnPrev = document.querySelector('a.prev')
  let bannerNum = 0
  
  const banner_frame = document.querySelector('.banner_frame')
  const banner_section = document.querySelectorAll('.banner_frame>section')
  let banner_width = document.querySelector('body').offsetWidth
    window.addEventListener('resize', ()=>{
      banner_width = document.querySelector('body').offsetWidth;
      
  
    })
  
    
  let isplaying = true
  const lastIdx = banner_section.length-1;
  let sectionIdx = 0;
  const bnn_rollA = document.querySelectorAll('.rolling li a')
  
  //next 버튼 눌렀을때
  btnNext.addEventListener('click', e=>{
    e.preventDefault();
    bannerNum ++;
    if(bannerNum>=banner_section.length)bannerNum = 0
    banner_frame.style.left = `-${bannerNum * banner_width}px`
    secWhite(bannerNum)
  
  })
  //prev버튼 눌렀을때
  btnPrev.addEventListener('click', e=>{
    e.preventDefault();
    bannerNum --;
    if(bannerNum<0)bannerNum = banner_section.length-1
    banner_frame.style.left = `-${bannerNum * banner_width}px`
    secWhite(bannerNum)
  })
  //오토배너 작동 - setTimeout 사용, 재귀함수 사용
  const play_pause_btn = document.querySelector('.rolling>p>.play')
  
  let autoBnn
  
  function autoBanner() {
    autoBnn = setTimeout(() => {
      bannerNum++;
      if (bannerNum >= banner_section.length) bannerNum = 0;
      banner_frame.style.left = `-${bannerNum * banner_width}px`;
      autoBanner(); 
      secWhite(bannerNum)
    }, 5000);
    
  }
  autoBanner();
  
  
  //재생/멈춤 버튼
  play_pause_btn.addEventListener('click', e =>{
    e.preventDefault()
    if(isplaying){
      isplaying = false
      clearTimeout(autoBnn)
    }else{
      isplaying = true
      autoBanner()    
    } 
  })
  
  /* 롤링 클릭 */
  
  const roll_btn = document.querySelectorAll('.banner_roll>li>a')
  
  for(let i=0; i<roll_btn.length; i++){
    roll_btn[i].addEventListener('click', e=>{
      e.preventDefault()
      banner_frame.style.left = `-${i * banner_width}px`;
      
      secWhite(bannerNum)
      roll_btn.forEach(el => {
        removeOn(el)
      });
      addOn(roll_btn[i])
    })
  }
  
  
  
  //section에 .white가 있으면 각 요소에 .white 붙이기
  const arrowA = document.querySelectorAll('.arrow>a')
  const rollingA = document.querySelectorAll('.rolling a')
  
  let secWhite = bannerNumber =>{
    if(banner_section[bannerNumber].classList.contains('white')){
      arrowA.forEach(item =>{
        item.classList.add('white');
      })
      rollingA.forEach(item =>{
        item.classList.add('white');
      })
    }else{
      arrowA.forEach(item =>{
        item.classList.remove('white');
      })
      rollingA.forEach(item =>{
        item.classList.remove('white');
      })
    }
  
    bnn_rollA.forEach((item) =>{
      item.classList.remove('on');
    })
    bnn_rollA[bannerNumber].classList.add('on');
  }
  
  
  
  /* 스크롤 이벤트 */
  const banner = document.querySelector('.banner')
  const content1 = document.querySelector('.content1')
  const content2 = document.querySelector('.content2')
  const content3 = document.querySelector('.content3')
  const footer = document.querySelector('#footer')
  
  banner.classList.add('on');
  content1.classList.add('on');

  window.addEventListener('scroll', () =>{

    let scrollTop = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrollHeight = document.documentElement.scrollHeight - windowHeight;

    let scrollPercentage = (scrollTop / scrollHeight) * 100;

    if (scrollPercentage >= 5) {
      content2.classList.add('on');
    }
  
    if (scrollPercentage >= 80) {
      content3.classList.add('on');
    }
   
    if (scrollPercentage >= 90) {
      footer.classList.add('on');
    }

    let scroll = document.querySelector('html').scrollTop;
    
    //도넛
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
    const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
    const combine_Left = document.querySelector(".combine_Left");
  
    const doughnut_Center_M = document.querySelector(".doughnut_Center_M")
    const doughnut_Center_s = document.querySelector(".doughnut_Center_s")
    
    const doughnut_right_M = document.querySelector(".doughnut_right_M");
    const doughnut_right_s = document.querySelector(".doughnut_right_s");
    const combine_Right = document.querySelector(".combine_Right");
  
    
  
    doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;
    doughnut_Left_s.style.top = `${scroll*0.5}px`;
    combine_Left.style.top = `${scroll*0.7}px`;
  
    doughnut_Center_M.style.top = `${1310-scroll*0.6}px`;
    doughnut_Center_s.style.top = `${scroll*0.7}px`;
  
   if(parseInt(combine_Right.style.top) > 951)
      {doughnut_right_M.style.top = `${scroll*0.6}px`;} 
  
  
    doughnut_right_s.style.top = `${scroll*0.4}px`;
    combine_Right.style.top = `${scroll*0.6}px`;
  })
  
  /* content3 */
  const all = document.querySelectorAll('.content3_inner>div>ul>li')
  
  for(let i=0;i<all.length;i++){
    all[i].addEventListener('mouseover', ()=>{
      addOn(all[i]);
    })
    all[i].addEventListener('mouseout', ()=>{
      removeOn(all[i])
    })
  }
  
  //대분류
  // li a 하나하나 클릭했을때
  // class 속성값 가져와서 변수에 저장
  // 변수값이랑 정확하게 일치하는 케이스 찾아서
  // 해당클래스이름에 해당되는 li만 보이게 설정; 각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고
  // 변수값이랑 정확하게 일치하는 케이스찾아서
  // 해당클래스 이름에 해당되는 li들만 보이게 설정한다.
  const ent = document.querySelectorAll('.content3_inner>div>ul>li.ent');
  const shop = document.querySelectorAll('.content3_inner>div>ul>li.shop');
  const dinner = document.querySelectorAll('.content3_inner>div>ul>li.dinner');
  const box = document.querySelectorAll('.content3_inner>div>ul>li.box');
  const cats = document.querySelectorAll('.content3_inner>ul>li')
  let nowcat ='';
  for(let i=0; i<cats.length; i++){
    cats[i].addEventListener('click', e =>{
      e.preventDefault();
      for(let i=0; i<cats.length; i++){
        removeOn(cats[i])
      }
      
  
      if(!i==0){
      for(let i=0; i<all.length; i++){
        all[i].style.display = 'none'}
      }else{
        for(let i=0; i<all.length; i++){
          all[i].style.display = 'block'
        }
      }
      
      const nowcat = cats[i].getAttribute('class')
      switch (nowcat) {
        case 'all':
          cats_on(all)
          break;
        case 'ent':
          cats_on(ent)
          break;
        case 'shop':
          cats_on(shop)
          break;
        case 'dinner':
          cats_on(dinner)
          break;
        case 'box':
          cats_on(box)
          break;
        }
        addOn(cats[i])
    })
  }
  
  function cats_on(item){
    for(let i=0; i<item.length;i++){
      item[i].style.display = 'block'
    }
  }
  
  
  /* footer */
  /* ul */
  
  const family_site = document.querySelector('.family_site')
  
  family_site.addEventListener('click', e =>{
    e.preventDefault();
    if(family_site.classList.contains("on")) {
      family_site.classList.remove("on");
      e.currentTarget.children[0].setAttribute("title","열기");
    }
    else {
      family_site.classList.add("on");
      e.currentTarget.children[0].setAttribute("title","닫기");
    }
  })
  
  /* top */
  const btn_top = document.querySelector('.top')
  
  window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;
    if(scroll <=0)
      {btn_top.classList.remove('on','ab');
      
    }else if(scroll>2560){
        btn_top .classList.add('ab'); 
        btn_top .classList.add('on');   
    }else{
      btn_top .classList.remove('ab')
      btn_top .classList.add('on')
    }
  
  })
  
  btn_top.addEventListener("click", e=>{
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  });
  
  //햄버거버튼 클릭
  // div.mob on
  // div.mobBtn_close.on
  // body.on div.bg.on
  
  
  //모바일 닫기 클릭
  
  
  const body = document.querySelector('body')
  const bg = document.querySelector('.bg')
  
  const mob_btn = document.querySelector('.mobBtn')
  const mob = document.querySelector('.mob')
  const mob_btn_close = document.querySelector('.mobBtn_close')
  
  
  mob_btn.addEventListener('click', e =>{
    e.preventDefault();
    addOn(mob);
    addOn(mob_btn_close);
    addOn(body);
    addOn(bg);
  })
  
  mob_btn_close.addEventListener('click', e=>{
    e.preventDefault();
    removeOn(mob);
    removeOn(mob_btn_close);
    removeOn(body);
    removeOn(bg);
  })

})

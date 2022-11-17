const ball=document.querySelector('#my-info')
ball.onmousedown = function(event) {

    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
  
    moveAt(event.pageX, event.pageY);
  
    // 초기 이동을 고려한 좌표 (pageX, pageY)에서
    // 공을 이동합니다.
    function moveAt(pageX, pageY) {
      ball.style.left = pageX - shiftX + 'px';
      ball.style.top = pageY - shiftY + 'px';
    }
    let currentDroppable = null;
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
      ball.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      ball.hidden = false;
    
      // 마우스 이벤트는 윈도우 밖으로 트리거 될 수 없습니다.(공을 윈도우 밖으로 드래그 했을 때)
      // clientX∙clientY가 윈도우 밖에 있으면, elementFromPoint는 null을 반환합니다.
      if (!elemBelow) return;
    
      // 잠재적으로 드롭 할 수 있는 요소를 'droppable' 클래스로 지정합니다.(다른 로직 가능)
      let droppableBelow = elemBelow.closest('.droppable');
    
      if (currentDroppable != droppableBelow) {
        // 들어오거나 날리거나...
        // 참고: 두 값 모두 null일 수 있습니다.
        //   currentDroppable=null 이벤트 전에 놓을 수 있는 요소 위에 있지 않다면(예: 빈 공간)
        //   droppableBelow=null 이벤트 동안 놓을 수 있는 요소 위에 있지 않다면
    
        if (currentDroppable) {
          // '날아가는 것'을 처리하는 로직(강조 제거)
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          // '들어오는 것'을 처리하는 로직
          enterDroppable(currentDroppable);
        }
      }
    }
  
    // mousemove로 공을 움직입니다.
    document.addEventListener('mousemove', onMouseMove);
  
    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    ball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ball.onmouseup = null;
    };
  
  };
  
  ball.ondragstart = function() {
    return false;
  };
$(function() {
  var boxList1 = $('.box')
  var firstList1 = []
  var h3Box = document.querySelectorAll('ul h3')
  for (let index = 0; index < h3Box.length; index++) {
    const element = h3Box[index];
    element.setAttribute("id", "item_" + index)
  }
  for (let index = 0; index < boxList1.length; index++) {
    const element = boxList1[index].querySelector('h3');
    if (!element.querySelector('.box')) {
      firstList1.push(element)
    }
    console.log($(element).parent()[0].querySelector('ul'))
    if (!$(element).parent()[0].querySelector('ul')) {
      $(element).parent().addClass('along')
    }
    var busy = false
    
    element.onclick = function (e) {
      if (busy) return
      busy = true
      var target = e.target
      // console.log(target.)
      var parent = $(target).parent()
      if (parent.hasClass("along")) {
        busy = false
        return
      }
      
      if (parent.hasClass("nopen")) {
        var boxList1 = document.querySelectorAll('.box')
        // for (var key2 in boxList1) {
        //   if (Object.hasOwnProperty.call(boxList1, key2)) {
        //     var element = boxList1[key2];
        //     var activeId = target.getAttribute("id")
        //     if (!element.querySelector('#' + activeId)) {
        //       element.setAttribute("class", "box nopen")
        //     }
        //   }
        // }
        setTimeout(() => {
          parent[0].setAttribute("class", "box open")
        }, 0);
        
      } else {
        parent[0].setAttribute("class", "box nopen")
      }
      setTimeout(() => {
        busy = false
      }, 200);
    }
  }

  var boxList2 = $('.box .box')
  var firstList2 = []
  for (let index = 0; index < boxList2.length; index++) {
    const element = boxList2[index];
    if (!element.querySelector('.box')) {
      firstList2.push(element)
    }
  }

  var boxList3 = $('.box .box .box')
  var firstList3 = []
  for (let index = 0; index < boxList3.length; index++) {
    const element = boxList3[index];
    if (!element.querySelector('.box')) {
      firstList3.push(element)
    }
  }
  console.log(firstList1, firstList2, firstList3)
  // 添加原点样式
  for (let index = 0; index < boxList1.length; index++) {
    const element = boxList1[index];
  }
})
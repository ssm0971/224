// 수정모달
function openModal() {
  document.getElementById('comu-myModal');
}

function closeModal() {
  document.getElementById('comu-myModal');
}

function goToPage() {
  window.location.href = '../community/comu-post-member.html';
}
// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  const modal = document.getElementById('comu-myModal');
  if (event.target == modal) {
    closeModal();
  }
};

// j쿼리 사용한  삭제모달창
$(document).ready(function() {
  const $modal = $('#comu-deleteModal');

  // 삭제 모달 열기
  window.openDeleteModal = function() {
    $modal.css('display', 'block');
  };

  // 삭제 모달 닫기
  window.closeDeleteModal = function() {
    $modal.css('display', 'none');
  };

 // 삭제 확인
  window.confirmDelete = function() {
    window.location.href = '../community/comu-post-member.html';
  };

  // 모달 외부 클릭 시 닫기
  $(window).on('click', function(event) {
    if ($(event.target).is($modal)) {
      closeDeleteModal();
    }
  });
});



// 뒤로가기모달
function openBackModal() {
  document.getElementById('comu-back-modal');
}

function closeBackModal() {
  document.getElementById('comu-back-modal');
}

function goToPage() {
  window.location.href = '../community/comu-post-rewrite.html';
}
// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  const modal = document.getElementById('comu-back-modal');
  if (event.target == modal) {
    closeModal();
  }
};

// j쿼리 사용한  뒤로가기모달창
$(document).ready(function() {
  const $modal = $('#comu-backModal');

  // 뒤로가기 모달 열기
  window.openBackModal = function() {
    $modal.css('display', 'block');
  };

  // 뒤로가기 모달 닫기
  window.closeBackModal = function() {
    $modal.css('display', 'none');
  };

 // 뒤로가기 확인
  window.confirmBack = function() {
    window.location.href = '../community/comu-post-writer.html';
  };

  // 모달 외부 클릭 시 닫기
  $(window).on('click', function(event) {
    if ($(event.target).is($modal)) {
      closeBackModal();
    }
  });
});

// 게시글 삭제 모달
function openPostModal() {
  document.getElementById('comu-myModal');
}

function closePostModal() {
  document.getElementById('comu-myModal');
}

function goToPage() {
  window.location.href = '../community/comu-post-member.html';
}
// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  const modal = document.getElementById('comu-myModal');
  if (event.target == modal) {
    closeModal();
  }
};

// j쿼리 사용한  삭제모달창
$(document).ready(function() {
  const $modal = $('#comu-deleteModal');

  // 삭제 모달 열기
  window.openDeletePostModal = function() {
    $modal.css('display', 'block');
  };

  // 삭제 모달 닫기
  window.closeDeletePostModal = function() {
    $modal.css('display', 'none');
  };

 // 삭제 확인
  window.confirmPostDelete = function() {
    window.location.href = '../community/comu-main-member.html';
  };

  // 모달 외부 클릭 시 닫기
  $(window).on('click', function(event) {
    if ($(event.target).is($modal)) {
      closeDeleteModal();
    }
  });
});




// Null 모달 열기
function openNullModal() {
  const modal = document.getElementById('comu-NullModal');
  modal.style.display = 'block'; // 모달 표시
}

// Null 모달 닫기
function closeNullModal() {
  const modal = document.getElementById('comu-NullModal');
  modal.style.display = 'none'; // 모달 숨기기
}

// input창에 입력값
const comuinputdata = document.getElementById('comment-input');

// 원래 페이지로 이동
function goToPage() {
  window.location.href = './';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
  const modal = document.getElementById('comu-NullModal');
  if (event.target === modal) {
    closeNullModal();
  }
};

// jQuery를 사용한 Null 모달
$(document).ready(function() {
  const $modal = $('#comu-NullModal');

  // 입력이 비어있거나 공백일 경우 Null 모달 열기
  window.openNullModal = function() {
    if (comuinputdata.value.trim() === "") { // 비어있거나 공백 확인
      $modal.css('display', 'block'); // 모달 표시
    }
  };

  // Null 모달 닫기
  window.closeNullModal = function() {
    $modal.css('display', 'none'); // 모달 숨기기
  };

  // 모달 외부 클릭 시 닫기
  $(window).on('click', function(event) {
    if ($(event.target).is($modal)) {
      closeNullModal();
    }
  });
});
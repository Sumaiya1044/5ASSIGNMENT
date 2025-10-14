document.addEventListener('DOMContentLoaded', () => {
  let heartCount = 0;
  let coins = 100;
  let copyCount = 0;

  


  document.querySelectorAll('.heart-btn i').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('fa-solid')) {
        heartCount++;
        heartCounter.textContent = heartCount;
        btn.classList.remove('fa-regular');
        btn.classList.add('fa-solid');
        btn.style.color = 'red';
      }
    });
  });

  
  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const number = card.querySelector('.service-number').textContent;
      navigator.clipboard.writeText(number)
        .then(() => {
          alert("Number Copied: " + number);
          copyCount++;
          copyCounter.textContent = copyCount;
        })
        .catch(() => {
          alert("Failed to copy!");
        });
    });
  });

  
  document.querySelectorAll('.btn-call').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.card');
      const name = card.querySelector('.service-name').textContent;
      const number = card.querySelector('.service-number').textContent;

      if(coins < 20){
        alert("Not enough coins to make a call!");
        return;
      }

      coins -= 20;
      coinCounter.textContent = coins;
      alert(`Calling ${name}: ${number}`);

      const time = new Date().toLocaleTimeString();
      const newItem = document.createElement('div');
      newItem.className = 'history-item';
      newItem.innerHTML = `<span>${name}: ${number}</span> <span>${time}</span>`;
      historyList.appendChild(newItem);
    });
  });

  
  clearHistoryBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to clear history?")) {
      historyList.innerHTML = '';
    }
  });
});

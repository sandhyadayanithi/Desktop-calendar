function updateCalendar(){
  const now=new Date();
  const date=now.getDate();
  const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  const month=monthNames[now.getMonth()];

  document.querySelector('.date').textContent=date;
  document.querySelector('.month').textContent=month;
}

updateCalendar();
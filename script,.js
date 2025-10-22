// Animate on load
window.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll('.animate-fade-in, .animate-up').forEach((el, i)=>{
    setTimeout(()=>el.style.opacity=1, 300*i);
  });
});

// Razorpay payment
document.addEventListener('DOMContentLoaded',function(){
  const buyBtn = document.getElementById('buyNow');
  if (buyBtn) {
    buyBtn.onclick = function(e){
      var options = {
        key:"rzp_test_yourkey", // Replace with your key
        amount:99900,
        currency:"INR",
        name:"ProTrader Academy",
        description:"Trading Video Course",
        handler: function(response){
          alert("Payment Success! ID: " + response.razorpay_payment_id);
          // Optionally, redirect to secret course page
        },
        prefill: { name:"", email:"" },
        theme: { color:"#ffd700" }
      };
      var rzp = new Razorpay(options);
      rzp.open();
      e.preventDefault();
    }
  }
});

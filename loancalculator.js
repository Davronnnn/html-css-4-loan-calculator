document.getElementById("loan-form").addEventListener("submit",calculateResult);

function calculateResult(e){
    

    const amount=document.getElementById('amount');
    const interest=document.getElementById('interest');
    const years=document.getElementById('years');
    const monthlyPayment=document.getElementById('monthly-payment');
    const totalPayment=document.getElementById('total-payment');
    const totalInterest=document.getElementById('total-interest');
    
    const principal=parseFloat(amount.value);
    const calculatedInterest=parseFloat(interest.value)/100/12;
    const calculatedPayment=parseFloat(years.value)*12;
    

    //monthly
    const x=Math.pow(1+calculatedInterest,calculatedPayment);
    const monthly=(principal*x*calculatedInterest)/(x-1)

    if (isFinite(monthly)) {
        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly*calculatedPayment).toFixed(2);
        totalInterest.value=((monthly*calculatedPayment)-principal).toFixed(2);    
    } else {
        errorFuncsiya("Please check your numbers");    
    }
    e.preventDefault();
}

function errorFuncsiya(error){
    const errorDiv=document.createElement('div');

    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');

    //Add class
    errorDiv.className='alert alert-danger';

    //create text node
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv,heading);

    setTimeout((clearError) => {
        document.queryCommandEnabled('.alert').remove();    
    }, 3000);
}
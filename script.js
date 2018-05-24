var items = ["Candy Bar", "Milk", "Graham Crackers", "Marshmallows"];
var prices = [1.99, 4.79, 8.99, 2.49];
var counter = [];   
var cartArray = [];
var cartPrices = []; 
var sub = 0;
var tax = 0;
var total = 0;
var addCount = 0;
var checkoutCount = 0;

window.onload = function GetMenu(){

  document.getElementById("menu1").innerHTML = items[0].toString();  

  document.getElementById("price1").innerHTML = `$  ${prices[0]}`.toString();
  
  document.getElementById("menu2").innerHTML = items[1].toString();  

  document.getElementById("price2").innerHTML = `$  ${prices[1]}`.toString();
  
  document.getElementById("menu3").innerHTML = items[2].toString();  

  document.getElementById("price3").innerHTML = `$  ${prices[2]}`.toString();
  
  document.getElementById("menu4").innerHTML = items[3].toString();  

  document.getElementById("price4").innerHTML = `$  ${prices[3]}`.toString();
}

function AddToCart(menuId, priceId){  
  
  if (addCount = checkoutCount)
    {
      Error();
    }
  else{
    
  counter.push(menuId);
  cartArray.push(menuId); 
  cartPrices.push(priceId)
  document.getElementById("counter").innerHTML =`Your Cart (${counter.length})`;  
  
    
  }
}

function SubTotal(priceId)
{
  var subTotalArr = [];

  subTotalArr.push(priceId); 

  for (var p of subTotalArr)
  {
    sub += p;
  }
  
}

function Tax(){
  tax = sub*.06;
  document.getElementById("tax").innerHTML = `Tax: $ ${parseFloat(Math.round(tax * 100) / 100).toFixed(2).toString()}`;

}

function Total(){
  total = sub + tax;
  document.getElementById("total").innerHTML = `Total: $ ${parseFloat(Math.round(total * 100) / 100).toFixed(2).toString()}`;

}

function Checkout(){
  addCount++;
  checkoutCount++;
       
  if (checkoutCount > 1)
  
    {
      ClearCartContents();
      Error();
    
    }  
  else
  {
  for (var i = 0; i < cartArray.length; i++)
{
   document.getElementById("cart").innerHTML +=` ${cartArray[i]}   ${cartPrices[i]} </br>`;      
}    
  
   document.getElementById("subTotal").innerHTML = `Subtotal: $ ${parseFloat(Math.round(sub * 100) / 100).toFixed(2).toString()}`;
  
   Tax(); 
   Total(); 
   
      
  }
}

function ClearCartContents()
{
  cartArray.length = null;
  document.getElementById("cart").innerHTML = cartArray;
  
}

function Clear(){
  
  cartArray.length = null;
  document.getElementById("cart").innerHTML = cartArray;      
   
  sub = null;
  document.getElementById("subTotal").innerHTML = sub;
  tax = null;
  document.getElementById("tax").innerHTML = tax;
  total = null;
  document.getElementById("total").innerHTML = total;
  counter.length = 0;
  document.getElementById("counter").innerHTML =`Your Cart (${counter.length})`;
  addCount = 0;
  checkoutCount = 0;
  
}

function Error(){
  alert("You've already checked out. Clear cart to start over.");
}



 
 






  


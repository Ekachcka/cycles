let index;
let sum;


// 1)

for (index = 25; index >=0; index--) {
    console.log(index);
}
index=25;
while (index>=0) {
    console.log(index--);
}
index=25;
do {
    console.log(index--);
}while (index>=0);

// 2)


for(index=10;index<=50;index+=5){
    console.log(index);
}
index=10;
while (index<50) {
    console.log(index);
    index+=5;
}
index=10;
do {
    console.log(index);
    index+=5;
}while (index<=50);

// 3)

for ( index = 2,sum=1; index <= 100; index++) {
    sum+=index;
}
console.log(sum);
index=2;
sum=1;
while (index<=100) {
    sum+=index++;
}
console.log(sum);
index=2;
sum=1;
do {
    sum+=index++;
}while (index<=100);
console.log(sum);

// 4)

for (index = false; index ===false;) {
    console.log('for:2+2*2 = sum');
    if (sum===6) {
        index=true;
    }
}
index=false;
sum=NaN;
while (index===false) {
    console.log('while:2+2*2 = sum');
    if (sum===6) {
        index=true;
    }
}
index=false;
sum=NaN;
do {
    console.log('doWhile:2+2*2 = sum');
    if (sum===6) {
        index=true;
    }
}while (index===false);

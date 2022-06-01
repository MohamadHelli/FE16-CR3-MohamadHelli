let Haifa = 140;
let Marcel = 20;
let Hossam = 249;
let Elissa = 140;
let Cheb = 20;
let Khaled = 249;
let Tamer = 140;
let Tarkan = 20;
let Fadl = 249;

let sum = (Haifa + Marcel + Hossam + Elissa + Cheb + Khaled + Tamer + Tarkan + Fadl);
console.log(sum);

let fest_day1 = Haifa + Cheb + Fadl;
let fest_day2 = Marcel + Khaled + Tarkan;
let fest_day3 = Hossam + Elissa + Tamer;
console.log(fest_day1);
console.log(fest_day2);
console.log(fest_day3);

{

    // First day

    let Haifa = "Haifa";
    let Cheb = "Cheb";
    let Fadl = "Fadl";
    console.log(`On the first day of the festival, I was lucky to watch bands  ${Haifa} , ${Cheb} and ${Fadl}. `)

    // Second day

    let Marcel = "Marcel";
    let Khaled = "Khaled";
    let Tarkan = "Tarkan";
    console.log(`Then I watched the bands  ${Marcel} , ${Khaled} and ${Tarkan} on the second day and it cost me ${fest_day2}$ in total that day. `)

    // Third day

    let Hossam = "Hossam";
    let Elissa = "Elissa";
    let Tamer = "Tamer";
    console.log(`I was a bit tired on the third day but it was so much worth it to watch the bands  ${Hossam} , ${Elissa} and ${Tamer} and i spent ${fest_day3}$ for the three days of the festival. `)

}

let totalsum = fest_day1 + fest_day2 + fest_day3;
let discount = totalsum * 0.3;
console.log(`If I had booked the concert with enough time in advance, it would have cost me a total of  ${totalsum} $ and I would have saved ${discount} $ `);
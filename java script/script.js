let haifa = 140;
let marcel = 20;
let hossam = 249;
let elissa = 140;
let cheb = 20;
let khaled = 249;
let tamer = 140;
let tarkan = 20;
let fadl = 249;

let sum = (haifa + marcel + hossam + elissa + cheb + khaled + tamer + tarkan + fadl);
console.log(sum);

let fest_day1 = haifa + cheb + fadl;
let fest_day2 = marcel + khaled + tarkan;
let fest_day3 = hossam + elissa + tamer;
console.log(fest_day1);
console.log(fest_day2);
console.log(fest_day3);

{

    // First day

    let haifa = "Haifa";
    let cheb = "Cheb";
    let fadl = "Fadl";
    console.log(`On the first day of the festival, I was lucky to watch bands  ${haifa} , ${cheb} and ${fadl}. `)

    // Second day

    let marcel = "Marcel";
    let khaled = "Khaled";
    let tarkan = "Tarkan";
    console.log(`Then I watched the bands  ${marcel} , ${khaled} and ${tarkan} on the second day and it cost me ${fest_day2}$ in total that day. `)

    // Third day

    let hossam = "Hossam";
    let elissa = "Elissa";
    let tamer = "Tamer";
    console.log(`I was a bit tired on the third day but it was so much worth it to watch the bands  ${hossam} , ${elissa} and ${tamer} and i spent ${fest_day3}$ for the three days of the festival. `)

}

let totalsum = fest_day1 + fest_day2 + fest_day3;
let discount = totalsum * 0.3;
console.log(`If I had booked the concert with enough time in advance, it would have cost me a total of  ${totalsum} $ and I would have saved ${discount} $ `);
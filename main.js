{
    // 5-misol
    function soni(a, b, c) {
        if (a > 0 && b > 0 && c > 0) {
            return ` 3 ta musbat son bor`;
        } else if (a < 0 && b > 0 && c > 0) {
            return `2 ta musbat son bor`;
        } else if (a > 0 && b < 0 && c > 0) {
            return `2 ta musbat son bor`;
        } else if (a > 0 && b > 0 && c < 0) {
            return `2 ta musbat son bor`;
        } else if (a < 0 && b < 0 && c > 0) {
            return `1 ta musbat son bor`;
        } else if (a < 0 && b > 0 && c < 0) {
            return `1 ta musbat son bor`;
        } else if (a > 0 && b < 0 && c < 0) {
            return `1 ta musbat son bor`;
        } else {
            return `Musbat son yo'q`;
        }
        // console.log(soni(-2, 2, -2));
    }
}

{
    // 6-misol
    function big(a, b) {
        if (a > b) {
            return ` ${a} soni ${b} dan katta`;
        } else if (b > a) {
            return ` ${b} soni ${a} dan katta`;
        } else {
            return `Bu sonlar teng`;
        }
    }
    // console.log(big(4, 3));
}

{
    // 7-misol
    function tartib(a, b) {
        if (a > b) {
            return 2;
        } else if (b > a) {
            return 1;
        } else {
            return `Bu sonlar teng`;
        }
    }
    // console.log(tartib(4, 3));
}

{
    // 8 - misol
    function tartib(a, b) {
        if (a > b) {
            return `Katta son ${a}, kichik son ${b}`;
        } else if (b > a) {
            return `Katta son ${b}, kichik son ${a}`;
        } else {
            return `Bu sonlar teng`;
        }
    }
    // console.log(tartib(4, 6));
}

{
    // 9- misol

    function uzgarish(A, B, C) {
        if (A > B) {
            C = A;
            A = B;
            B = C;
            return `A = ${A} B = ${B}`;
        } else if (B > A) {
            return `A = ${A} B = ${B}`;
        }
    }
    // console.log(uzgarish(10, 12));
}

{
    // 10-misol

    function uzlashtirish(a, b) {
        if (a != b) {
            a = a + b;
            b = a;
            return `a = ${a}, b = ${b}`;
        } else {
            a = 0;
            b = 0;
            return `a = ${a}, b = ${b}`;
        }
    }
    // console.log(uzlashtirish(2, 2));
}

{
    // 11-misol

    function uzlashtirish(a, b) {
        if (a > b) {
            b = a;
            return `a = ${a}, b = ${b}`;
        } else if (b > a) {
            a = b;
            return `a = ${a}, b = ${b}`;
        } else {
            a = 0;
            b = 0;
            return `a = ${a}, b = ${b}`;
        }
    }
    // console.log(uzlashtirish(5, 3));
}

{
    // 12-misol

    function small(a, b, c) {
        if (a > b && c > b) {
            return `Kichik son ${b}`;
        } else if (a > c && b > c) {
            return `Kichik son ${c}`;
        } else if (b > a && c > a) {
            return `kichik son ${a}`;
        } else {
            return `Bu sonlar teng !!!`;
        }
    }
    // console.log(small(5, 5, 5));
}

{
    // 13-misol

    function middle(a, b, c) {
        if (a > b && c < b) {
            return `O'rtacha son ${b}`;
        } else if (a > c && b < c) {
            return `O'rtacha son ${c}`;
        } else if (b > a && c < a) {
            return `O'rtacha son ${a}`;
        } else {
            return `Bu sonlar teng !!!`;
        }
    }
    // console.log(middle(6, 7, 5));
}

{
    // 14-misol

    function sum(a, b, c) {
        if (a > b && b > c) {
            return `a = ${a}, c = ${c}`;
        } else if (b > a && a > c) {
            return `b = ${b} ,c = ${c}`;
        } else if (c > b && b > a) {
            return `c = ${c}, a = ${a}`;
        } else if (c > a && b < a) {
            return `c = ${c}, b = ${b}`;
        } else if (a > c && c > b) {
            return `a = ${a}, b = ${b}`;
        } else if (c < b && c > a) {
            return `cb= ${b}, a = ${a}`;
        } else {
            return `Bu sonlar teng`;
        }
    }
    // console.log(sum(2, 2, 1));
}

{
    // 15-misol

    function sum(a, b, c) {
        if (a > c && b > c) {
            return `a = ${a}, b = ${b}`;
        } else if (a > b && c > b) {
            return `a = ${a} ,c = ${c}`;
        } else if (b > a && c > a) {
            return `c = ${c}, b = ${b}`;
        } else {
            return `Bu sonlar teng`;
        }
    }
    // console.log(sum(2, 2, 1));
}

{
    //   16-misol

    function hint(a, b, c) {
        if (a < b && b < c) {
            a = 2 * a;
            b = 2 * b;
            c = 2 * c;
            return `a = ${a}, b = ${b}, c = ${c}`;
        } else {
            a = -a;
            b = -b;
            c = -c;
            return `a = ${a}, b = ${b}, c = ${c}`;
        }
    }
    // console.log(hint(2, 4, 5));
}

{
    // 17-misol

    function hints(a, b, c) {
        if (a < b && b < c) {
            a = 2 * a;
            b = 2 * b;
            c = 2 * c;
            return `a = ${a}, b = ${b}, c = ${c}`;
        } else if (a > b && b > c) {
            a = 2 * a;
            b = 2 * b;
            c = 2 * c;
            return `a = ${a}, b = ${b}, c = ${c}`;
        } else {
            a = -a;
            b = -b;
            c = -c;
            return `a = ${a}, b = ${b}, c = ${c}`;
        }
    }
    // console.log(hints(2, 4, 5));
}

{
    // 18-misol

    function order(a, b, c) {
        if (a === b && c != a) {
            return `${c} ning tartib raqami 3`;
        } else if (a === c && b != a) {
            return `${b} ning tartib raqami 2`;
        } else if (b === c && a != b) {
            return `${a} ning tartib raqami 1`;
        } else {
            return `Bu sonlarning hammasi teng yoki teng emas !!!`;
        }
    }
    // console.log(order(2, 6, 6));
}

{
    // 19-misol

    function orders(a, b, c, d) {
        if (a === b && b === c && d != a) {
            return `${d} ning tartib raqami 4`;
        } else if (a === c && c === d && b != a) {
            return `${b} ning tartib raqami 2`;
        } else if (b === c && c === d && a != b) {
            return `${a} ning tartib raqami 1`;
        } else if (a === b && b === d && c != b) {
            return `${c} ning tartib raqami 3`;
        } else {
            return `Bu sonlarning hammasi teng yoki teng emas !!!`;
        }
    }
    // console.log(orders(2, 6, 6, 2));
}

{
    // 20-misol

    function sonlar(a, b, c) {
        if (Math.abs(b - a) > Math.abs(c - a)) {
            return `Masofa ${Math.abs(c - a)} ga teng`;
        } else if (Math.abs(b - a) < Math.abs(c - a)) {
            return `Masofa ${Math.abs(b - a)} ga teng`;
        } else {
            return `Bu oraliqlar teng`;
        }
    }
    // console.log(sonlar(7, 5, 6));
}

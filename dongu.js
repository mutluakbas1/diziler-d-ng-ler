function printNumber() {
    for (let x = 0; x < 100; x++) {

        console.log(x)
    }
}

//  printNumber ();



function ciftRakamYazdir() {
    for (let x = 0; x < 100; x++) {
        if ((x % 2) == 0) {
            console.log(x)
        }
    }
}
// ciftRakamYazdir();

function tekRakamYazdir() {
    for (let x = 0; x < 100; x++) {
        if ((x % 2) == 1) {
            console.log(x)
        }
    }
}
// tekRakamYazdir();

function rakamlarinKati() {
    for (let x = 0; x < 100; x++) {

        console.log(x * 2)
    }
}


// rakamlarinKati();

function sayiEsittir() {
    for (let x = 0; x < 100; x++) {

        console.log("sayı=" + x)
    }
}
// sayiEsittir();


function tekciftsayilar() {
    for (let x = 0; x < 100; x++) {

        if (x % 2 == 0) {
            console.log("cift sayı=" + x);
        }


        if (x % 2 == 1) {
            console.log("tek sayi=" + x);
        }



    }
}

// tekciftsayilar();


function bölümler() {
    for (let x = 0; x < 100; x++) {

        if (x % 15 == 0) {
            console.log("buz=" + x);
        }


        if (x % 5 == 0) {
            console.log("muz=" + x);
        }



    }
}
// bölümler();

function bölümlers() {
    for (let x = 0; x < 100; x++) {

        if (x % 15 == 0) {
            console.log("Muz Buz=" + x);
        }



        else if (x % 5 == 0) {
            console.log("Buz=" + x);
        }

        else if (x % 3 == 0) {
            console.log("Muz=" + x);
        }

        else {
            console.log(x);
        }
    }

}

// bölümlers();
function rakam() {
    var rakamlar = [];
    for (let x = 0; x < 100; x++) {
        rakamlar.push(x);
    };
    for (let x = 0; x < rakamlar.length; x++) {
        console.log("Rakam:" + rakamlar[x]);
    }
}

// rakam();

function ulkeler() {
    var ulke = ["Hollanda", "Fransa", "Almanya"];

    console.log(ulke[0]);
    console.log(ulke[2]);
}

// ulkeler();


function ulkeleronbes() {
    var ulke = ["Hollanda", "Fransa", "Almanya", "İsvicre", "Belcika", "Danimarka", "Türkiye", "Brezilya", "Rusya", "Japonya", "Hırvatistan", "Portekiz", "Arjantin", "Yunanistan", "Slovenya"];


    for (let x = 0; x < ulke.length; x++) {

        if (ulke[x].startsWith("A")) {
            console.log("Country:" + ulke[x]);
        }

    }
}

// ulkeleronbes();

function ulkelerilkbes() {
    var ulke = ["Hollanda", "Fransa", "Almanya", "İsvicre", "Belcika", "Danimarka", "Türkiye", "Brezilya", "Rusya", "Japonya", "Hırvatistan", "Portekiz", "Arjantin", "Yunanistan", "Slovenya"];

    for (let x = 0; x < 5; x++) {
        console.log(ulke[x])
    }

};
// ulkelerilkbes();

function seciliulkeler() {
    var ulke = ["Hollanda", "Fransa", "Almanya", "İsvicre", "Belcika", "Danimarka", "Türkiye", "Brezilya", "Rusya", "Japonya", "Hırvatistan", "Portekiz", "Arjantin", "Yunanistan", "Slovenya"];

    for (let x = 0; x < ulke.length; x++) {
        // if (x % 2 == 0) 
        if (x % 3 == 0) {
            console.log(ulke[x]);
        }
    }


}
// seciliulkeler();

function sekizulke() {
    var ulkelersekiz = [
        {
            ulkeAdi: "Hollanda",
            kıta: "Avrupa",
            zengin: true,
            kisiBasiMilliGelir: 7500,
        },

        {
            ulkeAdi: "Tanzanya",
            kıta: "Afrika",
            zengin: false,
            kisiBasiMilliGelir: 900,
        },

        {
            ulkeAdi: "Almanya",
            kıta: "Avrupa",
            zengin: true,
            kisiBasiMilliGelir: 9000,
        },
        {
            ulkeAdi: "Somali",
            kıta: "Afrika",
            zengin: false,
            kisiBasiMilliGelir: 1000,
        },

        {
            ulkeAdi: "Fransa",
            kıta: "Avrupa",
            zengin: true,
            kisiBasiMilliGelir: 8000,
        },

        {
            ulkeAdi: "Etiyopya",
            kıta: "Afrika",
            zengin: false,
            kisiBasiMilliGelir: 1200,
        },
        {
            ulkeAdi: "Kanada",
            kıta: "Kuzey Amerika",
            zengin: true,
            kisiBasiMilliGelir: 22000,
        },

        {
            ulkeAdi: "Yunanistan",
            kıta: "Avrupa",
            zengin: false,
            kisiBasiMilliGelir: 3500,
        }
    ]
    console.log("Geliri 5000 den büyük olan avrupa ülkeleri")
    for (let x = 0; x < ulkelersekiz.length; x++) {
        var ulkeBilgisi = ulkelersekiz[x];
        // console.log("country Name:"+ulkelersekiz[x].ulkeAdi),
        // console.log("kıta Adi:"+ulkelersekiz[x].kıta)


        // if(ulkeBilgisi.zengin==false){
        //     console.log("Zengin Ulkeler:"+ulkeBilgisi.ulkeAdi)
        // }
        if (ulkeBilgisi.kisiBasiMilliGelir > 5000 && ulkeBilgisi.kıta == "Avrupa") {


            console.log("Ülke Adi:" + ulkeBilgisi.ulkeAdi);
            console.log("Geliri:" + ulkeBilgisi.kisiBasiMilliGelir);
            console.log("Kıta:" + ulkeBilgisi.kıta);
            console.log("-------------------------");
        }
    }
}






// sekizulke();

function sayilar() {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

    let positiveTotal = 0;
    let negativeTotal = 0;
    for (let x = 0; x < numbers.length; x++) {
        let number = numbers[x];
        if (number > 0) {

            positiveTotal = positiveTotal + number;

        }
        else if (number < 0) {


            negativeTotal = negativeTotal + number;


        }

       

       

    }
    console.log("Positif Total=" + positiveTotal)
    console.log("Negatif Total=" + negativeTotal)

}
// sayilar();


function findTotal(array){


    let total=0;

    for(let x=0; x<array.length; x++ ){

        total=total + array[x];
    }
    return total;
}

// findTotal([1,2,3]);


function sayilar() {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

   
let positiveNumbers=[];
let negativeNumbers=[];

    for (let x = 0; x < numbers.length; x++) {
        let number = numbers[x];
        if (number > 0) {

            positiveNumbers.push(number);

        }
        else if (number < 0) {


           negativeNumbers.push(number);


        }

       
        
       

    }
    let positiveTotal=findTotal(positiveNumbers);
    let negativeTotal=findTotal(negativeNumbers);
    
    

    console.log(positiveTotal)
    console.log(negativeTotal)
}
 sayilar();

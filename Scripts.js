class Circle
{
    radius = 0;

    get ShowRadius()
    {
        return this.radius;
    }

    set ChangeRadius(radius)
    {
        this.radius = radius;
    }

    get Diameter()
    {
        return (this.radius * 2).toFixed(0);
    }

    Area()
    {
        return (Math.PI * this.radius * this.radius).toFixed(0);
    }

    Length()
    {
        return (2 * Math.PI * this.radius).toFixed(0);
    }
}
        
function CircleData(form)
{
    var r = form.text1.value;
    var circle = new Circle();
    circle.ChangeRadius = r;

    alert('Радиус круга: ' + circle.ShowRadius + '\n' + 'Диаметр равен: ' + circle.Diameter + '\n' + 'Площадь равна: ' + circle.Area() + '\n' + 'Длинна равна: ' + circle.Length());
}

var time = {
    h: 0,
    m: 0,
    s: 0,

    GetTime: function()
    {
        var time_now = this.h + ':' + this.m + ':' + this.s;
        alert('Время: ' + time_now);
    },

    ChangeH: function(h) {
        this.h = (this.h + h) % 24;
    },
    ChangeM: function(m) {
        var newM = this.m + m;
        this.m = newM % 60; 
        this.ChangeH.call(this, Math.floor(newM / 60)); 
    },
    ChangeS: function(s) {
        var newS = this.s + s;
        this.s = newS % 60; 
        this.ChangeM.call(this, Math.floor(newS / 60)); 
    }
};

function ChangeTime(form) {
    var h = parseInt(form.text1.value);
    var m = parseInt(form.text2.value);
    var s = parseInt(form.text3.value);

    if (!isNaN(h) && !isNaN(m) && !isNaN(s)) { 
        time.ChangeH(h);
        time.ChangeM(m);
        time.ChangeS(s);
        time.GetTime();
    } else {
        alert('Значения пусты или не являются числами');
    }
}

var car =
{
    manufacturer: "Nissan",
    model: "Qashqai",
    year: 2021,
    speed: 85,

    GetInfo: function()
    {
        alert('Информация про автомобиль:\n' + 'Марка: ' + this.manufacturer + '\n' + "Модель: " + this.model + '\n' + "Год выпуска: " + this.year + '\n' + "Средняя скорость: " + this.speed)
    },

    CountingTime: function(distance)
    {
        var user_distance = distance;
        var time = 0;
        var one_cycle = 4 + 1;
        var full_cycles = Math.floor(user_distance / (this.speed * one_cycle));
        time += full_cycles * one_cycle;
        user_distance -= full_cycles * this.speed * one_cycle;
        var last_cycle_time = Math.ceil(user_distance / this.speed);
        time += last_cycle_time;

        alert('Преодоление дистанции  ' + distance + "км на средней скорости " + this.speed + 'км/ч займёт: ' + time + 'ч')
    }
}

function Info()
{
    car.GetInfo();
}

function Distance(form)
{
    var distance = parseInt(form.text1.value);
    car.CountingTime(distance);
}



        
        
import { combineLatest, from, fromEvent,  of } from 'rxjs'; 
import { first, map, share,  switchMap, takeUntil,  tap } from 'rxjs/operators';

/*
const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);
*/
let i=0, j=0, k = 0;

const btn1Click = fromEvent(document.querySelector('#btn1') , 'click')
    .pipe(map(e=> 'btn1 click_' + i++), tap(console.log));
const btn2Click = fromEvent(document.querySelector('#btn2') , 'click')
    .pipe(map(e=> 'btn2 click_' + j++), tap(console.log));
const btn3Click = fromEvent(document.querySelector('#btn3') , 'click')
    .pipe(map(e=> 'btn3 click_' + k++), tap(console.log));
const closeClick = fromEvent(document.querySelector('#btnClose') , 'click')
    .pipe(map(e=> 'btnClose click'));
closeClick.subscribe(console.log)
//from([1,2,3,4,5]).subscribe(console.log)
//source.subscribe(console.log);
/*
btn1Click.subscribe(console.log)
btn2Click.subscribe(console.log)
btn3Click.subscribe(console.log)

btn1Click.pipe(
  switchMap(e1 => btn2Click.pipe(map(e2 => ({e1,e2})))),
  switchMap(ee => btn3Click.pipe(map(e3 => ({...ee,e3}))))
).subscribe(console.log)
*/
btn1Click.pipe(
    takeUntil(closeClick),
  switchMap(e1 => btn2Click.pipe(map(e2 => ({e1,e2})))),

  switchMap(ee => btn3Click.pipe(map(e3 => ({...ee,e3})))),

).subscribe(console.log)


/*
combineLatest(btn1Click, btn2Click, btn3Click).pipe( 
    takeUntil(closeClick))
.subscribe(console.log)
*/
import { combineLatest, from, fromEvent, of, Subject } from "rxjs";
import { first, map, share, switchMap, takeUntil, tap } from "rxjs/operators";

let i = 0,
  j = 0,
  k = 0;

const btn1Click = fromEvent(document.querySelector("#btn1"), "click").pipe(
  map(e => "btn1_click_" + i++),
  tap(e => console.log("tap_" + e))
);
const btn2Click = fromEvent(document.querySelector("#btn2"), "click").pipe(
  map(e => "btn2__click_" + j++),
  tap(e => console.log("tap_" + e))
);
const btn3Click = fromEvent(document.querySelector("#btn3"), "click").pipe(
  map(e => "btn3_click_" + k++),
  tap(e => console.log("tap_" + e))
);
const closeClick = fromEvent(document.querySelector("#btnClose"), "click").pipe(
  map(e => "btnClose_click")
);

closeClick.subscribe(console.log);

const subj = new Subject();

btn1Click.subscribe(e => subj.next(e));

subj.pipe(map(x => "11_" + x)).subscribe(console.log);
subj.pipe(map(x => "22_" + x)).subscribe(console.log);
subj.pipe(map(x => "33_" + x)).subscribe(console.log);
subj.pipe(map(x => "44_" + x)).subscribe(console.log);
subj.pipe(map(x => "55_" + x)).subscribe(console.log);
subj.pipe(map(x => "66_" + x)).subscribe(console.log);
subj.pipe(map(x => "77_" + x)).subscribe(console.log);
subj.pipe(map(x => "88_" + x)).subscribe(console.log);
subj.pipe(map(x => "99_" + x)).subscribe(console.log);

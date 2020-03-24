import React, { useEffect } from 'react';
import { interval, fromEvent, merge } from 'rxjs';
import { takeUntil, repeat } from 'rxjs/operators';

export interface ActivityCheckerProps {
  timeout: number;
};

export function ActivityChecker(props: ActivityCheckerProps) {

  useEffect(() => {
    // This observable merge all the events that shall restart the timer
    const sources$ = merge(
      fromEvent(document, 'click'),
      fromEvent(document, 'keydown'),
      fromEvent(document, 'mousemove'),
    );

    const sub = interval(props.timeout * 1000).pipe(
      takeUntil(sources$),  // we kill the timer as soon one event is emitted
      repeat(),  // restart the timer
    ).subscribe(
      () => {
        console.error('Timeout');
      }
    )

    return () => sub.unsubscribe();
  }, [])

  return (
    <div>Hello</div>
  )
}
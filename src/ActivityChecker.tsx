import React, { useEffect } from 'react';
import { interval, fromEvent, merge } from 'rxjs';
import { takeUntil, repeat } from 'rxjs/operators';

export interface ActivityCheckerProps {
  timeout: number;
  onTimeout: () => void;
};

export function ActivityChecker(props: ActivityCheckerProps) {

  const { timeout, onTimeout } = props;
  useEffect(() => {
    // This observable merge all the events that shall restart the timer
    const sources$ = merge(
      fromEvent(document, 'click'),
      fromEvent(document, 'keydown'),
      fromEvent(document, 'mousemove'),
    );

    const sub = interval(timeout * 1000).pipe(
      takeUntil(sources$),  // we kill the timer as soon one event is emitted
      repeat(),  // restart the timer
    ).subscribe(
      () => onTimeout()
    )

    return () => sub.unsubscribe();
  }, [timeout, onTimeout])

  return (
    <div data-testid="activity-checker">Hello</div>
  )
}
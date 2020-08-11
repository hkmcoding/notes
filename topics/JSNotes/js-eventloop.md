### Event Loop

The concept of event loop is simple. There's an endless loop, when JavaScript engine waits for tasks, executes them and then sleeps waiting for more tasks.

1. While there are tasks:
- Execute them, starting with the oldest task
2. Sleep until a task appears, then go to 1

If a task comes while the engine is busy, then it is <i>enqueued</i>. The tasks form a queue, so called "macrotask queue". Tasks from the queue are processed on "first come - first served" basis. 
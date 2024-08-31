/*
 * Template literals (enclosed by backticks `) allow you to embed variables directly in a string using ${variable}
 */
const message = {
  sender: "prem",
  reciever: "sargara",
  time: Date(),
  content: "hello world this is message",
};
console.log(
  `The message ${message.content}is send by ${message.sender} by ${message.reciever} on ${message.time}`
);

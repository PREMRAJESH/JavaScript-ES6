// Asynchronous function using async/await
async function fetchData() {
    console.log("Fetching data...");
  
    // Simulate an asynchronous operation, such as fetching data from an API
    return new Promise(resolve => {
      setTimeout(() => {
        const data = { name: "John", age: 30 };
        resolve(data);
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Another asynchronous function
  async function processData() {
    try {
      // The 'await' keyword is used to wait for the asynchronous operation to complete
      const result = await fetchData();
  
      // Once the asynchronous operation is complete, this code block is executed
      console.log("Data received:", result);
  
      // You can continue with other synchronous or asynchronous operations here
      console.log("Processing data...");
  
      // Simulate another asynchronous operation
      const processedData = await processFurther(result);
      console.log("Data processed further:", processedData);
  
      // Simulate one more asynchronous operation
      const finalResult = await performFinalTask(processedData);
      console.log("Final result:", finalResult);
  
    } catch (error) {
      // Handle errors if the asynchronous operation fails
      console.error("Error fetching or processing data:", error);
    }
  }
  
  // Additional asynchronous functions
  async function processFurther(data) {
    console.log("Processing data further...");
    return new Promise(resolve => {
      setTimeout(() => {
        const processedData = { ...data, status: "Processed" };
        resolve(processedData);
      }, 1500); // Simulating a delay of 1.5 seconds
    });
  }
  
  async function performFinalTask(data) {
    console.log("Performing final task...");
    return new Promise(resolve => {
      setTimeout(() => {
        const finalResult = { ...data, completed: true };
        resolve(finalResult);
      }, 1000); // Simulating a delay of 1 second
    });
  }
  
  // Calling the asynchronous function
  processData();
  
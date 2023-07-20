function findOptimalMix(time) {
    let arr = [0, 0, 0];
    let unit = [4, 5, 10];
    const prof = [0, 0, 0];
  
    if (time < 4) {
      console.log("Not Applicable");
    } else {
      let val = time - 4;
      prof[0] = prof[0] + val * 1000;
      arr[0]++;
  
      if (time >= 5) {
        val = time - 5;
        prof[1] = prof[1] + val * 1500;
        arr[1]++;
      } else if (time >= 10) {
        val = time - 10;
        prof[2] = prof[2] + val * 3000;
        arr[2]++;
      }
    }
  
    const maxValue = Math.max(...prof);
    console.log("Earnings:", maxValue);
    console.log(`T: ${arr[0]}, P: ${arr[1]}, C: ${arr[2]}`);
  }
  
  // Test Case 1
  const timeUnit1 = 7;
  console.log("Test Case 1");
  findOptimalMix(timeUnit1);
  
  // Test Case 2
  const timeUnit2 = 8;
  console.log("Test Case 2");
  findOptimalMix(timeUnit2);
  
  // Test Case 3
  const timeUnit3 = 13;
  console.log("Test Case 3");
  findOptimalMix(timeUnit3);
  
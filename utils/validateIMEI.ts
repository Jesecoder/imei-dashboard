// utils/validateIMEI.ts
export const isValidIMEI = (imei: string): boolean => {
    if (imei.length !== 15 || !/^\d+$/.test(imei)) {
      return false;
    }
    
    let sum = 0;
    for (let i = 0; i < 15; i++) {
      let digit = parseInt(imei.charAt(i), 10);
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    
    return sum % 10 === 0;
  };
  
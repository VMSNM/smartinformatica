function Percent(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num / 100);
  }
  
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  
  const USDollarCompact = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    notation: 'compact',
    compactDisplay: 'short'
  });
  
  const USDollar2Dig = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  const convertToNumberAndRound = (element) => {
    return Math.round(element * 100) / 100;
  }

  const dcfhighLow = (array) => {
    array.sort((a, b) => a - b);
    let min = array[0];
    let max = array[array.length - 1];
    let avg = array[1];
    return { min, avg, max }
  }

  const getDaysLeft = (start, totalNumOfDays) => {
    let startDate = new Date(start);
    let nowDate = new Date();
    let daysPassed = new Date(nowDate - startDate);
    let daysLeft = totalNumOfDays - (daysPassed.getDate() - 1);
    return daysLeft;
  }

  const convertToDate = (element) => {
    let newDate = new Date(element);
    return newDate.toLocaleDateString();
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  export { Percent, USDollar, USDollar2Dig, USDollarCompact, convertToNumberAndRound, dcfhighLow, getDaysLeft, convertToDate, getRandomInt }
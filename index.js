// code your solution here

// Saturday Fun
function saturdayFun(activity ='roller-skate') {
    return `This Saturday, I want to ${activity}!`
 }

// Monday Work
function mondayWork(workActivity = 'go to the office'){
    return(`This Monday, I will ${workActivity}.`)
  }

// Wrap Adjective
function wrapAdjective(highlight = '*'){
    return function(adjective = 'a hard worker'){
        return `You are ${highlight}${adjective}${highlight}!`
    }
}

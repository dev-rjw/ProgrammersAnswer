function solution(cards1, cards2, goal) {
    let answer = 'Yes';
    let i = 0, j = 0;
    
    goal.forEach((word) => {
        if(word === cards1[i]) {
            i++;   
        } else if (word === cards2[j]) {
            j++;
        } else {
            answer = 'No';
        }
    })
    
    return answer;
}
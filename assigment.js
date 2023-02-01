function shuffle(arr){
    let ans=[...arr];
    for(let i=1;i<arr.length;i++){
        if(i%2==0){
            // if index id even then we insert smaller element and swap
            if(ans[i]>ans[i-1]){
                [ans[i],ans[i-1]]=[ans[i-1],ans[i]];
            }
        }
        else{
            // if index is odd we pick larger element and swap
            if(ans[i]<ans[i-1])
            {
            [ans[i],ans[i-1]]=[ans[i-1],ans[i]];
            }
        }
    }
    
    return ans;
}

//Time complexity-- O(N) where N is the size of input array.
//Space complexity--O(N) as we are using extra array to store elements

var num = [2,1,5,3,11,7]
console.log(shuffle(num));

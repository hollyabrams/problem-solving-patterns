/**This problem can be solved using a two-pointer approach. You can keep a pointer on each string and move forward on each string whenever a match is found. If you find a match for every character in the first string, then it's a subsequence of the second string. */
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    if(!str1) return true;

    while (j < str2.length) {
        if(str2[j] === str1[i]) i++;
        if(i === str1.length) return true;
        j++;
    }

    return false;
}


// Time Complexity - O(N + M)
/**
 * Build two frequency counters. If any of the message characters are not
 *  found in the 'letters' characters, or if there are not enough of them,
 *  return false. Otherwise return true.
 */
function constructNote(message, letters) {
    let frequency_count = {};

    // Count the frequency of each letter in the given letters
    for(let letter of letters) {
        if(!frequency_count[letter]){
            frequency_count[letter] = 1;
        } else {
            frequency_count[letter]++;
        }
    }

    // Decrease the count for each character in message
    for(let char of message){
        if(!frequency_count[char] || frequency_count[char] <= 0){
            return false;
        }
        frequency_count[char]--;
    }

    return true;
}

// Time Complexity: O(M + N)

# Assigment

Write a function shuffle(arr)that takes input an array of numbers and returns an array by ordering the numbers in following fashion:a1 <= a2 >= a3 <= a4 >= ....Please note that there are multiple outputs that are possible for a given array. Your function can return one possible output.
Solution:
The approach I am using for solving this problem is that we want the element at odd index to be grater than the adjacent even index element.
So I simply traverse through the array and whenver the index is even i will check if the previous element is samller than i swap both the elements.
and if index id odd than i will check if previous elemnent is greater than i will swap this two.
Time Complexity--O(N) as we are traversing only once.
Space Complxity--O(N) as we are using an extra aray to store answer.

I have attached the js file of my solution.

---
title: The Josephus Problem in JavaScript
layout: page
image: /assets/images/posts/1_yn0h5ii5_pa9zdz9fwg2rg.jpeg
newsletter: false
comments: true
author: Amando Abreu
date: '2019-02-15 06:19:26'
---
The problem is named after Flavius Josephus, a Jewish historian living in the 1st century. According to Josephus' account of the siege of Yodfat, he and his 40 soldiers were trapped in a cave by Roman soldiers. They chose suicide over capture, and settled on a serial method of committing suicide by drawing lots. Josephus states that by luck or possibly by the hand of God, he and another man remained until the end and surrendered to the Romans rather than killing themselves. This is the story given in Book 3, Chapter 8, part 7 of Josephus' The Jewish War.



People are standing in a circle waiting to be executed. Counting begins at a specified point in the circle and proceeds around the circle in a specified direction. After a specified number of people are skipped, the next person is executed. The procedure is repeated with the remaining people, starting with the next person, going in the same direction and skipping the same number of people, until only one person remains, and is freed.



For our solution:

\- The point where the executions begin will be at 12 o'clock if we distribute all the people evenly over a circle.

\- The direction is clockwise

\- The number of skips is 0, meaning person 1 kills the person immediately to their left.



Let's try with 9 people.

n = 9;

k(n) = 3;

because, given

1,2,3,4,5,6,7,8,9

1 kills 2

3 kills 4

5 kills 6

7 kills 8

Remaining are:

1,3,5,7,9

we now start at 9 because 1 is next to 9 if the numbers are arranged in a circle.

9 kills 1

3 kills 5

Remaining are:

9,3,7

We now start at 7

7 kills 9

Remaining are:

3, 7

3 kills 7

The winner is number 3

Let's write some code to do this for us.

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="amando96" data-slug-hash="gqBQeR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="The Josephus Problem">
  <span>See the Pen <a href="https://codepen.io/amando96/pen/gqBQeR/">
  The Josephus Problem</a> by Amando Abreu (<a href="https://codepen.io/amando96">@amando96</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Feel free to change the input and even feel free to change the code, I've included a simple test case.

This is a list of the input n(number of people) and output k(n)(which number survives) from 1 to 100.

<table border="1"><thead><tr><th>n</th><th>k(n)</th></tr></thead><tbody><tr><td>1</td><td>1</td></tr><tr><td>2</td><td>1</td></tr><tr><td>3</td><td>3</td></tr><tr><td>4</td><td>1</td></tr><tr><td>5</td><td>3</td></tr><tr><td>6</td><td>5</td></tr><tr><td>7</td><td>7</td></tr><tr><td>8</td><td>1</td></tr><tr><td>9</td><td>3</td></tr><tr><td>10</td><td>5</td></tr><tr><td>11</td><td>7</td></tr><tr><td>12</td><td>9</td></tr><tr><td>13</td><td>11</td></tr><tr><td>14</td><td>13</td></tr><tr><td>15</td><td>15</td></tr><tr><td>16</td><td>1</td></tr><tr><td>17</td><td>3</td></tr><tr><td>18</td><td>5</td></tr><tr><td>19</td><td>7</td></tr><tr><td>20</td><td>9</td></tr><tr><td>21</td><td>11</td></tr><tr><td>22</td><td>13</td></tr><tr><td>23</td><td>15</td></tr><tr><td>24</td><td>17</td></tr><tr><td>25</td><td>19</td></tr><tr><td>26</td><td>21</td></tr><tr><td>27</td><td>23</td></tr><tr><td>28</td><td>25</td></tr><tr><td>29</td><td>27</td></tr><tr><td>30</td><td>29</td></tr><tr><td>31</td><td>31</td></tr><tr><td>32</td><td>1</td></tr><tr><td>33</td><td>3</td></tr><tr><td>34</td><td>5</td></tr><tr><td>35</td><td>7</td></tr><tr><td>36</td><td>9</td></tr><tr><td>37</td><td>11</td></tr><tr><td>38</td><td>13</td></tr><tr><td>39</td><td>15</td></tr><tr><td>40</td><td>17</td></tr><tr><td>41</td><td>19</td></tr><tr><td>42</td><td>21</td></tr><tr><td>43</td><td>23</td></tr><tr><td>44</td><td>25</td></tr><tr><td>45</td><td>27</td></tr><tr><td>46</td><td>29</td></tr><tr><td>47</td><td>31</td></tr><tr><td>48</td><td>33</td></tr><tr><td>49</td><td>35</td></tr><tr><td>50</td><td>37</td></tr><tr><td>51</td><td>39</td></tr><tr><td>52</td><td>41</td></tr><tr><td>53</td><td>43</td></tr><tr><td>54</td><td>45</td></tr><tr><td>55</td><td>47</td></tr><tr><td>56</td><td>49</td></tr><tr><td>57</td><td>51</td></tr><tr><td>58</td><td>53</td></tr><tr><td>59</td><td>55</td></tr><tr><td>60</td><td>57</td></tr><tr><td>61</td><td>59</td></tr><tr><td>62</td><td>61</td></tr><tr><td>63</td><td>63</td></tr><tr><td>64</td><td>1</td></tr><tr><td>65</td><td>3</td></tr><tr><td>66</td><td>5</td></tr><tr><td>67</td><td>7</td></tr><tr><td>68</td><td>9</td></tr><tr><td>69</td><td>11</td></tr><tr><td>70</td><td>13</td></tr><tr><td>71</td><td>15</td></tr><tr><td>72</td><td>17</td></tr><tr><td>73</td><td>19</td></tr><tr><td>74</td><td>21</td></tr><tr><td>75</td><td>23</td></tr><tr><td>76</td><td>25</td></tr><tr><td>77</td><td>27</td></tr><tr><td>78</td><td>29</td></tr><tr><td>79</td><td>31</td></tr><tr><td>80</td><td>33</td></tr><tr><td>81</td><td>35</td></tr><tr><td>82</td><td>37</td></tr><tr><td>83</td><td>39</td></tr><tr><td>84</td><td>41</td></tr><tr><td>85</td><td>43</td></tr><tr><td>86</td><td>45</td></tr><tr><td>87</td><td>47</td></tr><tr><td>88</td><td>49</td></tr><tr><td>89</td><td>51</td></tr><tr><td>90</td><td>53</td></tr><tr><td>91</td><td>55</td></tr><tr><td>92</td><td>57</td></tr><tr><td>93</td><td>59</td></tr><tr><td>94</td><td>61</td></tr><tr><td>95</td><td>63</td></tr><tr><td>96</td><td>65</td></tr><tr><td>97</td><td>67</td></tr><tr><td>98</td><td>69</td></tr><tr><td>99</td><td>71</td></tr><tr><td>100</td><td>73</td></tr></tbody></table>

You can see some patterns start to emerge, and it seems like 1 appears at specific intervals. k(n) = 1 shows up at n = 1,2,4,8,16,32,64. If you know binary, you know what these numbers mean. They can be expressed as such: 1 = 2<sup>0</sup>; 2 = 2<sup>1</sup>; 4 = 2<sup>2</sup>; 8 = 2<sup>3</sup>; 16 = 2<sup>4</sup>; 16 = 2<sup>5</sup>; 32 = 2<sup>6</sup>; 64 = 2<sup>7</sup>.

128 is out of bounds for this data set, but if we run the function with n = 128(2<sup>8</sup>), we should get k(128) = 1. 

After changing the input of our function, we indeed got k(128) = 1, why is that?

## Overview

A Hypergeometric calculator.

Given a population, sample size, successes in population, and target number of successes, the calculator will output the probability of the exact target, of at least the target, and of no successes.

This widget was created as an interactive supplement to an article I wrote on how to build manabases in singleton formats for Magic: the Gathering, which you can read [here](https://www.canadianhighlander.ca).


## Examples

What is the probability of drawing at least two lands in the opening hand of my 100 card deck if I run 38 lands?

> population: 100, sample size: 7, successes in population: 38, target: 2
>
> exactly 2: 28.42%, at least 2: 82.33%, none: 3.07%

When drawing an opening hand without any assumptions, we use the maximum deck size as our population.  
Our sample size during mulligans is 7.  
The successes in the population are lands, of which we have 38 here.  
We want at least 2 lands, so that's our target.


How many Forests do I need for Arbor Elf to be very reliable on turn 1 on the play?

> population: 99, sample size: 6, successes in population: 31, target: 1
>
> exactly 1: 28.84%, at least 1: 90.23%, none: 9.77%

This example is assuming we are looking at opening hands that contain Arbor Elf, thus our sample size and population are each reduced by 1. The distinction between this and the general probability of at least one Forest without Arbor Elf is made because we wouldn't necessarily care about having a Forest when we don't have a card that specifically wants one.

While you technically have an additional draw step (or two on the draw) to topdeck a Forest, you most likely would not keep a hand with Arbor Elf and without a Forest, so sample size remains at hand size - 1. When you start to fill out your manabase, keep in mind that Fetchlands that can grab Forests count towards successes in population, as do exceptions like Yavimaya, Cradle of Growth.


## Glossary

**Population**

What we're sampling from. Usually this is the deck. For questions regarding the opening hand or the opening hand plus a few turns, we use the deck's maximum size as the population.

**Sample size**

The number of cards we see in any given situation. For opening hand + n turns questions, use 7 + n draw steps on the play, and 8 + n on the draw.

**Successes in Population**

The number of hits in our deck.

**Successes in Sample**

The number of hits we need to satisfy the requirements of our question.


---
date: '2022-02-01'
title: 'What is your policy for collecting user financial data'
company: ''
location: 'Santa Clara, CA'
range: "Our company uses zero knowledge proofs and additional methods such as garbled circuits, MPC that keep user's financial information secure"
url: 'Data Collected?'
---

### Defining the interface

Typically users on Lucia's borrowing and lending protocol interact with our set of smart contracts using a frontend web application

### Concept of Credit Identity

We define credit identity as both the fact that they are a real human and the fact that they have a credit score that allows them to borrow. After the protocol obtains that information it decides how much they can borrow

### Specification

- the **Private input** (w): your address A, and the private key k to your address
- the **Public input** (x): set of all addresses with verified proof of credit identity profiles `{H_1, ...H_n}`
- Verification function f(x,w)
  - interpret W as the pair (A,k) and x as the list of valid profiles `{H_1, ...H_n}`
  - verifying that today is one of the addresses `{H_1, ...H_n}`
  - create a function that takes in a private key k and converts that to it's public address A. We can call this `privKeyToAddr(k)`. Check `privKeyToAddr(k) == A`
  - returns true only if both verifications pass, false if either verification fails

### How is Lucia's Attribution product tied in to this?

The attribution product acts as what's known in the industry as the central operator. Eventually, our organization will expand our protocol to allow mutliple attribution providers to provide user session data, behavioral data using our set of ZK smart contracts.

<br/>
<br/>
<p align="middle" >
  <img width="100px;" src="/Users/leezer/Desktop/Study/javascript/woowacourse/javascript-calculator/src/images/calculator_icon.png"/>
</p>
<h2 align="middle">level1 - 자바스크립트 계산기</h2>
<p align="middle">자바스크립트 계산기로 익혀보는 Cypress</p>
<p align="middle">
  <img src="https://img.shields.io/badge/version-1.0.0-blue?style=flat-square" alt="template version"/>
  <img src="https://img.shields.io/badge/language-html-red.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-css-blue.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/language-js-yellow.svg?style=flat-square"/>
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"/>
</p>

## 🔥 Projects!

<p align="middle">
  <img width="300" src="/Users/leezer/Desktop/Study/javascript/woowacourse/javascript-calculator/src/images/calculator_ui.png">
</p>

## 🎯 기능 요구사항

- [ ] 2개의 숫자에 대해 덧셈이 가능하다.
- [ ] 2개의 숫자에 대해 뺄셈이 가능하다.
- [ ] 2개의 숫자에 대해 곱셈이 가능하다.
- [ ] 2개의 숫자에 대해 나눗셈이 가능하다.
- [ ] AC(All Clear)버튼을 누르면 0으로 초기화 한다.
- [ ] 숫자는 한번에 최대 3자리 수까지 입력 가능하다.
- [ ] 계산 결과를 표현할 때 소수점 이하는 버림한다.

<br/>

## 📝 기능 구현 목록

- [ ] 숫자 버튼 클릭시 화면에 숫자 출력할 수 있게 한다.
  - 숫자 연속적으로 입력이 가능하게 한다.
  - 숫자 입력시 0 이 사라지게 한다.
  - 연산자가 숫자보다 먼저 왔을시에 `Early return` 하여 무시한다.
  - 숫자 보다 앞에 `-` 연산자가 올 시에는 음수로 변환
- [ ] 연산자 입력시에 연산자 화면에 출력할 수 있게 한다.
  - 이미 연산자가 출력된 상태에서 다른 연산자 입력시 가장 마지막 입력한 연산자로 변환
  - 연산자 다음에 `-` 입력시 다음값 음수로 변환
- [ ] AC 버튼 클릭시 화면 0 으로 초기화
- [ ] 3 자리 이상의 수 입력시 다음 입력값은 적용하지 않는다.
- [ ] 계산 결과는 Math.floor() 함수 이용하여 소숫점 자리 버린다.

## Cypress 테스트 구현

- [ ]

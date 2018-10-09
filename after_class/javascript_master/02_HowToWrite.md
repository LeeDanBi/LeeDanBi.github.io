# 2 기본적인 작성법 익히기

## 2-1 JavaScript의 기본적인 표기

### 2-1-1 "안녕하세요, 자바스크립트!" 출력
```javascript
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>자바스크립트 마스터북</title>
    </head>
    <body>
        <script type="text/javascript">
            window.alert('안녕하세요, 자바스크립트!');
        </script>
        <noscript>JavaScript를 이용할 수 없습니다</noscript>
    </body>
</html>
```

### 2-1-2. JavaSCript를 HTML 파일 안에 집어넣기

#### A. `<script>`요소를 기술하는 장소

1. `<body>`요소의 안(임의의 위치)
	- 웹 페이지의 가독성/보수성을 위해 일부 예외를 제외하고는 사용하지 말아야 한다.
	
2. `<body>`요소의 안(`</body>` 직전)
	- 웹 페이지의 확면 갱신을 끝낸 후 스크립트를 로딩/실행 하므로 실제로 보이는 화면 갱신 속도가 개선 된다.

3. `</head>`요소의 안
	- 2번으로 처리할 수 없는 케이스의 경우. (ex. `<body>`요소 내에서 호출할 필요가 있는 함수는 `<head>`요소 내에서 `<script>`호출)

> 권장 기술 장소 : 2번 > 3번 > 1번

#### B. 외부 스크립트 임포트하기

```javascript
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <title>자바스크립트 마스터북</title>
    </head>
    <body>
        <script type="text/javascript" src="2_03_hello_ex.js" ></script>
        <noscript>JavaScript를 이용할 수 없습니다</noscript>
    </body>
</html>
```
```javascript
window.alert('안녕하세요, 자바스크립트!');
```

**외부 스크립트 임포트 장점**
- 레이아웃과 스크립트를 분할함으로써 코드를 재이용하기 쉽다.
- 스크립트를 외부 파일화함으로써 HTML 파일 자체를 파악하기 쉬워진다.

## 2-2.변수와 상수

## 2-3. 데이터형

## 2-4.연산자

## 2-5 제어 구문
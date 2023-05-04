# UI Testing

[Storybook UI Testing Handbook](https://storybook.js.org/tutorials/ui-testing-handbook/react/ko/introduction/) 내용을 정리하며 실습한 레포지토리입니다.

![](https://storybook.js.org/tutorials/ui-testing-handbook/ui-testing-workflow.png)

1. 📚 Storybook을 이용한 컴포넌트 분리. props와 모의 데이터를 사용하여 각 상태를 재현하는 테스트 케이스를 작성합니다.

2. ✅ Chromatic을 이용한 시각적 요소 버그 포착 및 구성 확인.

3. 🐙 Jest와 Testing Library를 이용한 상호작용 검증.

4. ♿️ Axe를 이용한 접근성 심사.

5. 🔄 Cypress를 이용해 e2e 테스트 코드를 작성하여 사용자 흐름 검증.

6. 🚥 GitHub Actions을 통해 자동으로 테스트를 실행해 회귀 포착.

## UI 테스트 대상

### 시각적 요소

- 컴포넌트가 props 및 상태에 대해 올바르게 렌더링되는지
- 모든 컴포넌트의 스크린샷을 찍은 뒤 commit 단위에서 비교하여 변경 사항을 식별

### 구성 요소

- 컴포넌트들은 데이터의 흐름을 따라 서로 연결
- 상위 레벨의 컴포넌트나 페이지에서 시각적 요소 테스트를 실행하면 연결을 확인할 수 있음

### 상호작용

- 이벤트가 의도한 대로 처리되는지 검증

- 컴포넌트를 분리해서 렌더링한 다음, 클릭이나 입력 같은 사용자 동작을 시뮬레이션하고 상태가 올바르게 업데이트 되었는지 확인

### 접근성

- 시각장애, 청각장애 등 다양한 장애와 관련된 사용성을 보장하기 위해

- Axe와 같은 자동화 도구를 QA에 활용해 접근성 위반을 탐지

- 사람의 주의가 필요한 까다로운 문제에 대해서는 실제 디바이스에서 수동으로 QA를 수행

### 사용자 흐름(User flow)

- 간단한 작업이라도 사용자가 여러 컴포넌트에 걸쳐 일련의 단계를 완료해야

- Cypress 및 Playwright와 같은 도구를 사용하면 전체 애플리케이션에 대해 테스트를 실행하여 이러한 상호작용을 확인

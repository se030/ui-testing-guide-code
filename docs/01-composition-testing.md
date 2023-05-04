# Composition Testing

- 컴포넌트 하나의 버그가 주변의 다른 부분에도 영향을 미치며 전체의 결함으로 확대될 수 있음

- 단순한 컴포넌트 여러 개가 모여 구성되는 복합 컴포넌트는 애플리케이션의 상태와도 연결

1. 복합 컴포넌트를 분리하고 시각적 테스트를 적용하는 방법

2. 모의 데이터(mocking data)와 애플리케이션 로직을 시뮬레이션 하는 방법

3. 컴포넌트 통합 테스트

## 구성 테스트

몇 가지 간단한 컴포넌트로 구성된 트리의 상위에 있는 "복합" 컴포넌트에 대해 시각적 테스트를 실행하는 것

- 변경 사항이 전체 애플리케이션에 미칠 수 있는 영향을 측량

- 시스템이 전체적으로 작동하는지 확인

- 복합 컴포넌트가 **애플리케이션 상태를 추적하고 동작을 트리 아래로 전달**

### 인수(args) 구성

- [Args](https://storybook.js.org/docs/react/writing-stories/args)를 활용해 스토리에 대한 입력을 정의

- [Actions addon](https://storybook.js.org/docs/react/essentials/actions) 기반으로 이벤트 핸들러를 정의해 addon 패널에 표시 가능

  ```js
  export default {
    component: Task,
    title: 'Task',
    argTypes: {
        onArchiveTask: { action: 'onArchiveTask' },
        onTogglePinTask: { action: 'onTogglePinTask' },
        onEditTitle: { action: 'onEditTitle' },
    },
  };
  ```

- 동일한 데이터를 반복해서 적지 않고도 스토리를 작성할 수 있고, 컴포넌트의 통합 테스트를 가능하게 해줌

### 상태를 가지는 복합 컴포넌트

- [useTasks.js](../src/useTasks.js) 커스텀 훅을 사용해 데이터를 가져오고 어플리케이션 상태를 관리하는 `InboxScreen`

- 실제 백엔드로부터 컴포넌트를 분리하고 기능별로 테스트하기 위해 Mock Service Worker 사용

![Thanks everyone](https://user-images.githubusercontent.com/63814960/236133153-5660da79-e5bd-467e-b501-bdeadbef828d.png)

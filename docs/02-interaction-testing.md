# Interaction Testing

UI는 사용자들이 보고 상호작용하는 것, 정보와 이벤트의 흐름이 잘 동작하는 것이 중요

## 진짜로 작동하나요?

컴포넌트의 주요 임무는 props를 받아서 한 조각의 UI으로 렌더링하는 것. 더 복잡한 컴포넌트들은 상태를 추적하기도 하며 동작들을 컴포넌트 트리 아래로 전달

e.g. `InboxScreen`

- 사용자는 일정을 고정시키기 위해 별 아이콘을 클릭, 또는 체크박스를 클릭해 업무를 보관

- 시각적 요소 테스트들은 이런 모든 상태 안에서 컴포넌트가 올바르게 보이는지 보장

- 또한 **UI가 이 상호 작용에 정확히 응답하는지** 보장

![InboxScreen](https://storybook.js.org/tutorials/ui-testing-handbook/interactive-taskbox.gif)

## 상호작용 테스트

- 모의 데이터를 제공하여 테스트 시나리오를 설정

- [Testing Library](https://testing-library.com/)를 사용해 사용자 상호 작용 시뮬레이션 및 결과 DOM 구조 확인

![Testing Library](https://storybook.js.org/tutorials/ui-testing-handbook/1_AyDgC9kxOjUl8Yihq0ltTQ.gif)

### [Play function](https://storybook.js.org/docs/react/writing-stories/play-function)을 통한 상호작용 테스트

- Story.play 함수 코드는 스토리가 렌더링 된 후에 실행

- 테스팅 라이브러리의 클릭, 드래그, 탭, 타이핑 등 사용자 상호 작용을 시뮬레이션하기 위한 편리한 API / Jest의 선언 유틸리티를 사용해 테스트를 작성

```js
PinTask.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const getTask = (name) => canvas.findByRole('listitem', { name });

  // Find the task to pin
  const itemToPin = await getTask('Export logo');

  // Find the pin button
  const pinButton = await findByRole(itemToPin, 'button', { name: 'pin' });

  // Click the pin button
  await userEvent.click(pinButton);

  // Check that the pin button is now a unpin button
  const unpinButton = within(itemToPin).getByRole('button', { name: 'unpin' });
  await expect(unpinButton).toBeInTheDocument();
};

```

- 별도 터미널 창에서 `--watch` 옵션과 함께 테스트 러너를 실행

  ```bash
  yarn test --watch
  ```

  - 모든 스토리가 오류없이 전달되고, 모든 선언이 통과되는지 보장

  - 테스트가 실패하면 브라우저에서 실패한 스토리를 여는 링크 제공

import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { ORIGIN_2D } from '../../constants';
import pointer from '../../events/pointer';
import value from "../../animation/value";
import { curriedCssVarSetter } from "../../utils";
import SimpleCursor from "./simple-cursor";

const Container = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 50;
`;


const Cursor = () => {
  const ref = useRef();
  const { state } = 'hidden';

  const sourceValue = useMemo(() => {
    return value(ORIGIN_2D).start();
  }, []);

  useEffect(() => {
    const p = pointer().start(sourceValue.update);
    return () => {
      p.stop();
    };
  }, []); //eslint-disable-line

  return (
    <Container ref={ref}>
    <SimpleCursor
      refKey='simple'
      state={state}
      sourceValue={sourceValue}
      curriedSetter={curriedCssVarSetter(ref)}
    />
    </Container>
  );
};

export default Cursor;

import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { Input, Space, Tag, Tooltip, theme } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const SkillTags = ({ tags, onTags }) => {
  const { token } = theme.useToken();
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    onTags(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      onTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };
  const handleEditInputChange = (e) => {
    setEditInputValue(e.target.value);
  };
  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    onTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };
  const tagInputStyle = {
    width: 96,
    height: 28,
    marginInlineEnd: 8,
    verticalAlign: 'top',
    borderRadius: '8px',
  };
  const tagPlusStyle = {
    height: 28,
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };

  return (
    <Space size={[0, 8]} wrap>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={editInputRef}
              key={tag}
              size="small"
              style={tagInputStyle}
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > 30;
        const tagElem = (
          <StyledTag
            key={tag}
            closable={true}
            style={{
              userSelect: 'none',
            }}
            onClose={() => handleClose(tag)}
          >
            <span
              onDoubleClick={(e) => {
                e.preventDefault();
                setEditInputIndex(index);
                setEditInputValue(tag);
              }}
            >
              {isLongTag ? `${tag.slice(0, 30)}...` : tag}
            </span>
          </StyledTag>
        );

        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}

      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={tagInputStyle}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <StyledTag
          style={tagPlusStyle}
          icon={<PlusOutlined />}
          onClick={showInput}
        >
          New Skill
        </StyledTag>
      )}
    </Space>
  );
};

const StyledTag = styled(Tag)`
  &.ant-tag {
    font-family: var(--font-sans);
    font-size: 14px;
    line-height: 28px;
    border-radius: var(--border-radius-lg);
  }
`;

SkillTags.propTypes = {
  tags: PropTypes.array,
  onTags: PropTypes.func,
};

export default SkillTags;

import React, { useState } from 'react';
import {
  MyPageBasicInfo,
  MyPageBasicInfoBox,
  MyPageRepresentiveImg,
  MyPageTopBackground,
  MyPageEditIcon,
  MyPagePhotoInput,
} from 'design/myPageStyles/myPageStyles';
import { setGender } from 'utils/setGender';
import {
  faCirclePlus,
  faPen,
  faFloppyDisk,
} from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@tanstack/react-query';
import { putUserRepresentPhoto } from 'api/mypageApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { putUserNames } from '../../api/mypageApi';

type myBasicInfoProps = {
  userBasicData: {
    name: string;
    nickName: string;
    age: number;
    gender: string;
  };
  location: string;
};

function MyBasicInfo({ userBasicData, location }: myBasicInfoProps) {
  const [userImg, setUserImg] = useState('');
  const [editNames, setEditNames] = useState(true);
  const [userNames, setUserNames] = useState({ name: '', nickName: '' });
  const mutation = useMutation(putUserRepresentPhoto, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('대표 사진 수정 완료');
      }
    },
  });
  const editNameMutation = useMutation(putUserNames, {
    onSuccess({ data }: any) {
      if (data.code == 200) {
        alert('이름 및 닉네임 수정 완료');
      }
    },
  });

  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    setUserImg(URL.createObjectURL(event.target.files[0]));
    mutation.mutate(userImg);
  };

  const saveUserName = () => {
    editNameMutation.mutate(userNames);
    alert(userNames);
    setEditNames(true);
  };

  const onChangeNames = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserNames({
      ...userNames,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <MyPageTopBackground>
        <form action="submit">
          <MyPageRepresentiveImg
            src={
              userImg
                ? userImg
                : 'https://d3kxs6kpbh59hp.cloudfront.net/community/COMMUNITY/4429919ce17c4d45b3c9095468065cbc/eff09c43aff1460f885dca2a6974dd85_1606815289.jpg'
            }
            alt="대표 이미지"
          />
          <MyPageEditIcon icon={faCirclePlus} />
          <MyPagePhotoInput
            type="file"
            accept="image/jpg"
            onChange={saveFileImage}
          />
        </form>
      </MyPageTopBackground>
      <div
        style={{
          marginTop: '35px',
          textAlign: 'center',
          fontSize: '12px',
          marginBottom: '4px',
        }}
      >
        이름 / 별명
      </div>
      <MyPageBasicInfo>
        <input
          type="text"
          defaultValue={userBasicData.name}
          disabled={editNames}
          name="name"
          onChange={onChangeNames}
        />
        <input
          type="text"
          defaultValue={userBasicData.nickName}
          disabled={editNames}
          name="nickName"
          onChange={onChangeNames}
        />
        <FontAwesomeIcon
          icon={editNames ? faPen : faFloppyDisk}
          onClick={() => {
            editNames ? setEditNames(false) : saveUserName();
          }}
        />
      </MyPageBasicInfo>
      <MyPageBasicInfoBox marginTop={30}>
        <MyPageBasicInfo>{setGender(userBasicData.gender)}</MyPageBasicInfo>
        <MyPageBasicInfo>{userBasicData.age}</MyPageBasicInfo>
        <MyPageBasicInfo>{location}</MyPageBasicInfo>
      </MyPageBasicInfoBox>
    </>
  );
}

export default MyBasicInfo;

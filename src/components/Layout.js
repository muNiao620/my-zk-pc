// import { Layout,Menu, Slider } from "antd";
import { Route, Link, useLocation,HashRouter } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined, InstagramOutlined,AlibabaOutlined,AlertOutlined,BuildOutlined,CiOutlined,CodeOutlined,ContainerOutlined,CompressOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';

// const { Sider, Content } = Layout
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('系统概览', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('病历质控', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('实时监控', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem('核心医疗制度', 'sub5', <InstagramOutlined />, [
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
    getItem('Option 13', '13'),
    getItem('Option 14', '14'),
  ]),
  getItem('手术管理', 'sub6', <AlibabaOutlined />, [
    getItem('Option 15', '15'),
    getItem('Option 16', '16'),
    getItem('Option 17', '17'),
    getItem('Option 18', '18'),
  ]),
  getItem('临床用血管理', 'sub7', <AlertOutlined />, [
    getItem('Option 19', '19'),
    getItem('Option 20', '20'),
    getItem('Option 21', '21'),
    getItem('Option 22', '22'),
  ]),
  getItem('危急值管理', 'sub8', <BuildOutlined />, [
    getItem('Option 23', '23'),
    getItem('Option 24', '24'),
    getItem('Option 25', '25'),
    getItem('Option 26', '26'),
  ]),
  getItem('指标体系', 'sub9', <CiOutlined />, [
    getItem('Option 27', '27'),
    getItem('Option 28', '28'),
    getItem('Option 29', '29'),
    getItem('Option 30', '30'),
  ]),
  getItem('统计报表', 'sub10', <CodeOutlined />, [
    getItem('Option 31', '31'),
    getItem('Option 32', '32'),
    getItem('Option 33', '33'),
    getItem('Option 34', '34'),
  ]),
  getItem('医疗质量评价', 'sub11', <ContainerOutlined />, [
    getItem('Option 35', '35'),
    getItem('Option 36', '36'),
    getItem('Option 37', '37'),
    getItem('Option 38', '38'),
  ]),
  getItem('系统设置', 'sub12', <CompressOutlined />, [
    getItem('Option 39', '39'),
    getItem('Option 40', '40'),
    getItem('Option 41', '41'),
    getItem('Option 42', '42'),
  ]),

];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const ProLayoutLeft = ()=>{
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <>
      <div className="vh100 " style={{maxWidth: '200px',minWidth: '200px'}}>
        
        <Link className="pointer flex  xy-center" style={{ height:'64px' }} to="home">
          {/* logo */}
          <img src="img/nav-logo.png" className="block" style={{ width : '18px' }} alt="" />
          <div className="app-title pl2 f3 bold">在水医方930质控</div>
        </Link>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 256,
          }}
          items={items}
        />
      </div>
      
    </>
    
  )
  
}
export default ProLayoutLeft
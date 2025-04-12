import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useStore } from '../store';

const Profile = () => {
  const { user, setUser } = useStore();
  const [message, setMessage] = useState({ type: '', text: '' });

  const formik = useFormik({
    initialValues: {
      fullName: user?.fullName || '',
      email: user?.email || '',
      birthDate: user?.birthDate ? new Date(user.birthDate).toISOString().split('T')[0] : '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Vui lòng nhập họ tên'),
      email: Yup.string()
        .email('Email không hợp lệ')
        .required('Vui lòng nhập email'),
      birthDate: Yup.date().required('Vui lòng nhập ngày sinh'),
      currentPassword: Yup.string().when('newPassword', {
        is: (val) => val && val.length > 0,
        then: Yup.string().required('Vui lòng nhập mật khẩu hiện tại')
      }),
      newPassword: Yup.string()
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .when('currentPassword', {
          is: (val) => val && val.length > 0,
          then: Yup.string().required('Vui lòng nhập mật khẩu mới')
        }),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Mật khẩu không khớp')
        .when('newPassword', {
          is: (val) => val && val.length > 0,
          then: Yup.string().required('Vui lòng xác nhận mật khẩu mới')
        })
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.put('/api/users/profile', values);
        setUser(response.data.user);
        setMessage({ type: 'success', text: 'Cập nhật thông tin thành công' });
      } catch (error) {
        setMessage({
          type: 'error',
          text: error.response?.data?.message || 'Cập nhật thất bại'
        });
      }
    }
  });

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Hồ sơ cá nhân</h2>

      {message.text && (
        <div
          className={`p-4 mb-6 rounded ${
            message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Họ tên
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...formik.getFieldProps('fullName')}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
            Ngày sinh
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...formik.getFieldProps('birthDate')}
          />
          {formik.touched.birthDate && formik.errors.birthDate && (
            <div className="text-red-500 text-sm mt-1">{formik.errors.birthDate}</div>
          )}
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Đổi mật khẩu</h3>

          <div className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                Mật khẩu hiện tại
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...formik.getFieldProps('currentPassword')}
              />
              {formik.touched.currentPassword && formik.errors.currentPassword && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.currentPassword}</div>
              )}
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                Mật khẩu mới
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...formik.getFieldProps('newPassword')}
              />
              {formik.touched.newPassword && formik.errors.newPassword && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.newPassword}</div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Xác nhận mật khẩu mới
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile; 
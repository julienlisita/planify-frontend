// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

// Pages
import HomePage from '../pages/public/HomePage';
import RecipeDetailsPage from '../pages/public/RecipeDetailsPage';
import CategoriesPage from '../pages/public/CategoriesPage';
import SubCategoriesPage from '../pages/public/SubCategoriesPage';
import SubSubCategoriesPage from '../pages/public/SubSubCategoriesPage';
import ArticleListPage from '../pages/public/ArticleListPage';
import ArticlePage from '../pages/public/ArticlePage';
import ContactsPage from '../pages/public/ContactsPage';
import NewsletterPage from '../pages/public/NewsletterPage';
import TermsOfServicePage from '../pages/public/TermsOfServicePage';
import PrivacyPolicyPage from '../pages/public/PrivacyPolicyPage';
import LegalMentionsPage from '../pages/public/LegalMentionsPage';
import AboutPage from '../pages/public/AboutPage';
import NotFoundPage from '../pages/public/NotFoundPage';
import SearchResultsPage from '../pages/public/SearchResultsPage';

import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import DeleteAccountPage from '../pages/auth/DeleteAccountPage'

import AccountPage from '../pages/user/AccountPage';
import UserInfoAndSettingsPage from '../pages/user/UserInfoAndSettingsPage';
import PlanningPage from '../pages/user/PlanningPage';
import FavoritesPage from '../pages/user/FavoritesPage';
import ShoppingListsPage from '../pages/user/ShoppingListsPage';
import MessagesPage from '../pages/user/MessagesPage';
import RecipeManagementPage from '../pages/user/RecipeManagementPage';
import CreateRecipePage from '../pages/user/CreateRecipePage'; 
import NotificationsPage from '../pages/user/NotificationsPage';

import ArticlesManagementPage from '../pages/author/ArticlesManagementPage';
import CreateArticlePage from '../pages/author/CreateArticlePage';

import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import UserManagementPage from '../pages/admin/UserManagementPage';
import RecipeModerationPage from '../pages/admin/RecipeModerationPage';
import CommentModerationPage from '../pages/admin/CommentModerationPage';
import ArticleModerationPage from '../pages/admin/ArticleModerationPage';
import ReportsPage from '../pages/admin/ReportsPage';

import SuperAdminDashboardPage from '../pages/superadmin/SuperAdminDashboardPage';
import AdminsManagementPage from '../pages/superadmin/AdminsManagementPage';
import GlobalSettingsPage from '../pages/superadmin/GlobalSettingsPage';

const ROLE_SUPERADMIN = 1
const ROLE_ADMIN = 2
const ROLE_AUTHOR = 3
const ROLE_USER = 4

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/categories/" element={<CategoriesPage />} />
            <Route path="/categories/:category_id/" element={<SubCategoriesPage />} />
            <Route path="/categories/:category_id/subcategories/:subcategory_id/" element={<SubSubCategoriesPage />} />
            <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:article_id" element={<ArticlePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/legal-mentions" element={<LegalMentionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            
            {/* Auth routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />

            {/* User routes */}
            <Route path="/user/account" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><AccountPage /></ProtectedRoute>} />
            <Route path="/user/settings" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><UserInfoAndSettingsPage /></ProtectedRoute>} />
            <Route path="/user/planning" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><PlanningPage /></ProtectedRoute>} />
            <Route path="/user/favorites" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><FavoritesPage /></ProtectedRoute>} />
            <Route path="/user/shopping-lists" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><ShoppingListsPage /></ProtectedRoute>} />
            <Route path="/user/messages" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><MessagesPage /></ProtectedRoute>} />
            <Route path="/user/recipes" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><RecipeManagementPage /></ProtectedRoute>} />
            <Route path="/user/recipes/new" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><CreateRecipePage /></ProtectedRoute>} />
            <Route path="/user/notifications" element={<ProtectedRoute allowedRoles={[ROLE_USER,ROLE_AUTHOR]}><NotificationsPage /></ProtectedRoute>} />

            {/* Author routes */}
            <Route path="/author/articles" element={<ProtectedRoute allowedRoles={[ROLE_AUTHOR]}><ArticlesManagementPage /></ProtectedRoute>} />
            <Route path="/author/articles/new" element={<ProtectedRoute allowedRoles={[ROLE_AUTHOR]}><CreateArticlePage /></ProtectedRoute>} />

            {/* Admin routes */}
            <Route path="/admin/dashboard" element={<ProtectedRoute allowedRoles={[ROLE_ADMIN]}><AdminDashboardPage /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute allowedRoles={[ROLE_ADMIN]}><UserManagementPage /></ProtectedRoute>} />
            <Route path="/admin/recipes" element={<ProtectedRoute allowedRoles={[ROLE_ADMIN]}><RecipeModerationPage /></ProtectedRoute>} />
            <Route path="/admin/comments" element={<ProtectedRoute allowedRoles={[ROLE_ADMIN]}><CommentModerationPage /></ProtectedRoute>} />
            <Route path="/admin/articles" element={<ProtectedRoute allowedRoles={[ROLE_ADMIN]}><ArticleModerationPage /></ProtectedRoute>} />
            <Route path="/admin/reports" element={<ProtectedRoute allowedRoles={[ROLE_ADMIN]}><ReportsPage /></ProtectedRoute>} />

            {/* SuperAdmin routes */}
            <Route path="/superadmin/dashboard" element={<ProtectedRoute allowedRoles={[ROLE_SUPERADMIN]}><SuperAdminDashboardPage /></ProtectedRoute>} />
            <Route path="/superadmin/admins" element={<ProtectedRoute allowedRoles={[ROLE_SUPERADMIN]}><AdminsManagementPage /></ProtectedRoute>} />
            <Route path="/superadmin/settings" element={<ProtectedRoute allowedRoles={[ROLE_SUPERADMIN]}><GlobalSettingsPage /></ProtectedRoute>} />

            {/* Fallback Route */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
     );
};

export default AppRoutes;